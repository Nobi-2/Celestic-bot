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
    start: async (
    Miku,
    m,
    { prefix, pushName, ECOstatus, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🐈‍⬛Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`🦄Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `🕊️Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `${botName}`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

const now = new Date();
        const hour = now.getHours();

       let greeting;
        if (hour >= 0 && hour < 12) {
          greeting = "Ohayou gozaimasu"; //good morning
        } else if (hour >= 12 && hour < 18) {
          greeting = "Konnichiwa"; //good afternoon
        } else {
          greeting = "Konbanwa"; //good evening
        }
let text = `*━━━❰ DETAILS ❱━━━*
*ʜᴇʟʟᴏ ${pushName} sᴇɴᴘᴀɪ*
ᴛʜᴇ ʟɪsᴛ ᴏғ ᴏᴜʀ ʙᴏᴛs
*1) ɢᴀᴍᴇʙᴏᴛ = ᴏᴜʀ ɢᴀᴍᴇʙᴏᴛ ʜᴀᴠᴇ ᴘᴏᴋᴇ
    ғᴇᴀᴛᴜʀᴇs sᴘᴇᴄɪᴀʟʟʏ ᴀɴᴅ ᴡᴇ ᴡɪʟʟ 
    ᴀᴅᴅ ᴘᴏᴋᴇ ʙᴀᴛᴛʟᴇ sᴏᴏɴ. 
    ᴛʏᴘᴇ ${prefix}ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ᴀʟʟ ғᴇᴀᴛᴜʀᴇs*
*2) ᴍᴀɪɴ ʙᴏᴛ ɪs ᴛᴏᴛᴀʟʟʏ ᴍᴏᴅɪғɪᴇᴅ ʙʏ 
    ᴛᴇᴀᴍ ᴄᴇʟᴇsᴛɪᴄ ғʀᴏᴍ ᴀᴛʟᴀs ʀᴇᴘᴏ. 
    ᴛʏᴘᴇe ${prefix}ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ*\n\n
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

ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ`;
 }
await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: text}, { quoted: m });
    }
  },
};
