const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'rules',
    desc: 'Displays bot rules',
    alias: ['r','help-r'],
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
*━━❰ CELSTIC RULES ❱━━*
*1) Users have to join our support group for any query. Type ${prefix}support to get link*
*2) Users can join casino group to get economy features type casino to get casino link*
*3) Don't Spam. If you spam you will be banned*
*4) Don't spam or text bot Personal chat. Otherwise you will be blocked*
*5  If you call bot You will be banned*
*6)don't send gc link in casino gc*
*7)currently only one bot is on so no more gcs aftee public bot come then u can have more gcs*
*8)if u bee active in our group you will get prizes*
*9)we can give bot in some chooses gcs*
*10)we don't need more mods don't ask for mods*
*11)bot will be added in activate and 70+ members groups*               *12)preifx of our bots are various now and working bots preifx are boruto- : , Bajrang - ! , Nobita - # etc*`;
}
