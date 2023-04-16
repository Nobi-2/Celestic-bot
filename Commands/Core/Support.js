const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'support',
    desc: 'Displays bot support groups',
    alias: ["cb","botgcs"],
    category: 'Core',
    usage: 'stats',
    react: '📊',
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
*━━❰ SUPPORT GROUPS ❱━━*
*Hi users i am ${botName} created by team Celestic*

*suppor group links*

*CELESTIC OFFICIAL GROUP*
https://chat.whatsapp.com/CyK9zgUyl4A3AioKTafDPJ
*CELESTIC CASINO GROUP*
https://chat.whatsapp.com/KF2G5qd5VfgLBBLthPaOlO

*rules of groups*
*dont spam*
*dont fight*
*dont disrespect anyone*
*dont dm anyone without permission*

*join our official gc for bot request in your groups and bot query*
*joun our casino group to get economy features*

*Thanks you for using celestic*`;
        }
