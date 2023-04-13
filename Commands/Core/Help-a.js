const { mku } = require('../../Database/dataschema.js');
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'help-a',
    desc: 'Displays bot lists',
    alias: ['menu-a','h-a'],
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

function generateStatsText(users, bots, groups, mods, commands, sessions, uptime) 
  return `
*━━━❰ DETAILS ❱━━━*


*hello user i am celest-bot by team celestic here is teh information about our bot*

our bots
*1)gamebot = our gamebot have poke features specially and we wilm soon add poke battle tganks type (-help) to geg its feature*
*2)main bot that us totally modified nd devloped by tema celestic form atlas repo tyoe {$prefix help} to get information*
3) pubic bots for everyone can deploy
js bot repo = repo not found
ts repo = under devlopment 

CELSTIC BOTZ CONTACTS `;
 TELEGRAM = https://t.me/+zJpompWc6SE1YTI9
 DISCORD = https://discord.gg/ETEZrh6a6k
 CASINO = https://chat.whatsapp.com/DrY5MBaiDRS9BAcpCpJQCv
 WHATSAAP = https://chat.whatsapp.com/EodcJDysqP0LInOzcaPRC1
 WEBSITE =   https://celestic-website-2.celestic1.repl.co
 YOUTUBE =  https://youtube.com/@CELESTIC-bottoinc
 MAIN WEB = https://celesticbotz.000webhostapp.com/
 GMAIL = Celestic.bot.inc@gmail.com
 
 TO CONTACT MODS TYPE {$PREFIX} DEVS

CELESTIC BOTZ INC 2023 BY TEAM CELESTIC

footer = CELESTIC BOTZ INC`;
             }
