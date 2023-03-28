const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'devlopers',
    desc: 'Displays bot moderator',
    alias: ['devs','devinfo'],
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
*━━❰ CELESTIC MODERATORS ❱━━*
*NOBITA owner wa.me/917000562148*
*Owner and editor of celestic*

*SHISUI wa.me/918961331275*
*Creator and command maker*

*LUCKY wa.me/+917903576495*
*Main devloper of js*
 
*JIRAYA wa.me+918429288800*
*Assistant devloper of js*

*YUJi wa.me+265990169520*
*Main dev of ts*

*KIDSAMA Wa.me/+2348108631565*
*Assistant dev of ts*

*BAJRANG Wa.me/+918279975767*
*Web and app maker*

*Steve Wa.me/+2349116124469*
*hoster* `;
          }
