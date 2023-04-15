const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'set',
    desc: 'enable or disable switch ',
    alias: ['set'],
    category: 'groups',
    usage: 'enable or disable',
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

function generateStatsText(users, bots, groups, mods, commands, sessions, uptime) 
  return `
*━━━❰ SET ❱━━━*
SET1 = TYPE SET1 TO GET ALL THE BOT SWITCHES SO U CAN ON OFF DIRECTLY AND THIS IS IN BUTTONS FROM SO IF U ARE USING MODDED WHATSAPP SO U THIS COMMAMD FOR YOU.

SET2 = TYPE SET2 TO GET ALL THE BOT SWITCHES IN MANUAL FORM THIS COMMAND IS FOR THOSE WHO CANT SEE BUTTONS AND  USING NORMAL OFFICIAL WHATSAPP OR CLONE WHATSAPP BY THIS U CAN MNAUALLY ON OFF SWITCHES.`;
}
