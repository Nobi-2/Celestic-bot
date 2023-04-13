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

function generateStatsText(users, bots, pushName, prefix, groups, mods, commands, sessions, uptime) {
  return `
*━━━❰ DETAILS ❱━━━*


* ʜᴇʟʟᴏ ${pushName} sᴇɴᴘᴀɪ*
ᴛʜᴇ ʟɪsᴛ ᴏғ ᴏᴜʀ ʙᴏᴛs
*1) ɢᴀᴍᴇʙᴏᴛ = ᴏᴜʀ ɢᴀᴍᴇʙᴏᴛ ʜᴀᴠᴇ ᴘᴏᴋᴇ ғᴇᴀᴛᴜʀᴇs sᴘᴇᴄɪᴀʟʟʏ ᴀɴᴅ ᴡᴇ ᴡɪʟʟ ᴀᴅᴅ ᴘᴏᴋᴇ ʙᴀᴛᴛʟᴇ sᴏᴏɴ. ᴛʏᴘᴇ ${prefix}ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ᴀʟʟ ғᴇᴀᴛᴜʀᴇs*
*2) ᴍᴀɪɴ ʙᴏᴛ ɪs ᴛᴏᴛᴀʟʟʏ ᴍᴏᴅɪғɪᴇᴅ ʙʏ ᴛᴇᴀᴍ ᴄᴇʟᴇsᴛɪᴄ ғʀᴏᴍ ᴀᴛʟᴀs ʀᴇᴘᴏ. ᴛʏᴘᴇe ${prefix}ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ*\n\n
 ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ᴄᴏɴᴛᴀᴄᴛs
 ᴛᴇʟᴇɢʀᴀᴍ = https://t.me/+zJpompWc6SE1YTI9
 ᴅɪsᴄᴏʀᴅ = https://discord.gg/ETEZrh6a6k
 ᴄᴀsɪɴᴏ = https://chat.whatsapp.com/DrY5MBaiDRS9BAcpCpJQCv
 ᴡʜᴀᴛsᴀᴀᴘ = https://chat.whatsapp.com/EodcJDysqP0LInOzcaPRC1
 ᴡᴇʙsɪᴛᴇ =   https://celestic-website-2.celestic1.repl.co
 ʏᴏᴜᴛᴜʙᴇ =  https://youtube.com/@CELESTIC-bottoinc
 ᴍᴀɪɴ ᴡᴇʙ = https://celesticbotz.000webhostapp.com/
 ɢᴍᴀɪʟ = Celestic.bot.inc@gmail.com
 
 ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍᴏᴅs ᴛʏᴘᴇ ${prefix}ᴅᴇᴠs

 ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ©2023 ʙʏ ᴛᴇᴀᴍ ᴄᴇʟᴇsᴛɪᴄ

footer = ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ`;
 }

