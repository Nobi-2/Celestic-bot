module.exports = {
    name: "set",
    desc: "enable or disable switch",
    alias: ["set"],
    category: "groups",
    usage: "enable or disable",
    react: "🔢",
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `*━━━❰ SET ❱━━━*
SET1 = TYPE SET1 TO GET ALL THE BOT SWITCHES SO U CAN ON OFF DIRECTLY AND THIS IS IN BUTTONS FROM SO IF U ARE USING MODDED WHATSAPP SO U THIS COMMAMD FOR YOU.

SET2 = TYPE SET2 TO GET ALL THE BOT SWITCHES IN MANUAL FORM THIS COMMAND IS FOR THOSE WHO CANT SEE BUTTONS AND  USING NORMAL OFFICIAL WHATSAPP OR CLONE WHATSAPP BY THIS U CAN MNAUALLY ON OFF SWITCHES.\n\n
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
