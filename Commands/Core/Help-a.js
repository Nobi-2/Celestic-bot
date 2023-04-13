module.exports = {
    name: 'help-a',
    desc: 'Displays bot lists',
    alias: ['menu-a','h-a'],
    category: 'Core',
    usage: 'stats',
    react: '🔢',
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `*━━━❰ DETAILS ❱━━━*
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
        await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
     }
}
