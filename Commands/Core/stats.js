const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'stats',
    desc: 'Displays bot statistics',
    alias: ["info"],
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
*━━━❰ STATISTICS ❱━━━*
👥Users: ${users}
🚀Bots: ${bots}
🌑Groups: ${groups}
🥇Mods: ${mods}
📪Commands: ${commands}
💬Sessions: ${sessions}
♨️Botname : ${botName}
🟣Author : Team Celestic
♓Version : Celestic v9.0
💯 Celestic: bot2 (public js bot)
✝️Grouplimit : 15-25
🛑banned users : 1
🀄Disabled command: 0
📛Celestic type = javascript (js)
🕰️Uptime: ${runtime(uptime)}`;
        }
