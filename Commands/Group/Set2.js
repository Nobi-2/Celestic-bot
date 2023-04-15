module.exports = {
    name: "set2",
    desc: "enable or disable manually",
    alias: ["set-2"],
    category: "groups",
    usage: "switches",
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `*━━━❰ SET2 ❱━━━*
1)*ECONOMY*
-ECONOMYSWITCH ON
-ECONOMYSWITCH OFF

2)*ANTILINK*
-ANTILINK ON
-ANTILINK OFF

3)*WELCOME*
-WELCOMESWITCH ON
-WELCOMESWITCH OFF

4)*NSFW*
-NSFWSWITCH ON
-NSFWSWITCH OFF

5)*CHATBOTGC*
-CHATBOTGC ON
-CHATBOTGC OFF

6)*CHATBOTPM*
-CHATBOTPM ON
-CHATBOTPM OFF

7)*BOT*
-BOTSWITCH ON
-BOTSWITCH OFF\n\n
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
        await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
     }
}

