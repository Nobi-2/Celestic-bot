const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'help-g',
    desc: 'Displays bot lists',
    alias: ['menu-g','h-g'],
    category: 'Core',
    usage: 'stats',
    react: '🔢',
    start: async (Miku, m, { text, prefix, mentionByTag, pushName, botName, isCreator, participants, modStatus, commands, store, from }) => {
      try {
      const [modlist, FetchGC, totalUsers, sessionCount] = await Promise.all([
        mku.find({ addedMods: 'true' }),
        Miku.groupFetchAllParticipating(),
        mku.find({}),
        sessionSchema.countDocuments(),
      ]);

      const groups = Object.entries(FetchGC).map(entry => entry[1]);
      const groupIds = groups.map(v => v.id);
      const modIds = modlist.map(mod => mod.id);
      const cmds = Array.from(commands.values()).filter(v => v.type !== 'hide').length;

      const statsText = generateStatsText(totalUsers.length, 2, groupIds.length, modIds.length, cmds, sessionCount, process.uptime());
      return Miku.sendMessage(m.from, { text: statsText }, { quoted: m });

    } catch (error) {
      console.error('Error in stats command:', error);
      return Miku.sendMessage(m.from, { text: 'An error occurred while fetching bot statistics.' }, { quoted: m });
    }
  },
};

function generateStatsText(users, bots, groups, mods, commands, sessions, uptime) {
  return `
*━━━❰ GAMEBOT ❱━━━*
TYPE -HELP 

*➩ Characters Side*

   ❐ claim, gchara, gallery, schara

*➩ Economy Side*

   ❐ bank, daily, deposit, gamble, give, rob, slot, wallet, withdraw

*➩ Fun Side*

   ❐ friendship, reaction, ship, simp, triggered, fact

*➩ Games Side*

   ❐ answer, forfeit-quiz, quiz

*➩ General Side*

   ❐ help, hi, info, mods, profile, rank, repo, set-bio

*➩ Media Side*

   ❐ lyrics, play, spotify, yta, yts, ytv

*➩ Moderation Side*

   ❐ close, delete, demote, open, ping, promote, purge, remove, set

*➩ Weeb Side*

   ❐ manga, anime, character, divorce, haigusha, hg, kitsune, loli, marry, neko, waifu

*➩ Pokemon Side*

   ❐ catch, pokedex, party, pc, pokemon, swap, t2party, t2pc, trade, trade-confirm, trade-delete

*➩ Utils Side*

   ❐ define, github, prettier, quotly, react, retrieve, steal, sticker, upload, urbandictionary

📕 *Note: we are doing iur best to bring update*
`;
        }
