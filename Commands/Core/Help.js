module.exports = {
    name: "help",
    desc: "Displays bot lists",
    alias: ["menu","h"],
    category: "Core",
    usage: "stats",
    react: "🔢",
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `*━━━❰ STATISTICS ❱━━━*\n
*ʙᴏᴛ ᴅᴇᴛᴀɪʟs*    
┃┄⊰❀ 1. ᴛʏᴘᴇ ʜᴇʟᴘ-ᴄ ᴛᴏ ɢᴇᴛ ᴀʟʟ 
┃┄⊰          ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏғ
┃┄⊰          ᴏᴜʀ ᴊs ʙᴏᴛ ᴏɴʟʏ ᴏᴜʀ ᴊs
┃┄⊰          ʙᴏᴛ ᴘʀᴏᴠɪᴅᴇs ᴛʜɪs ʜᴇʟᴘʟɪsᴛ
┃┄⊰❀ 2. ᴛʏᴘᴇ ʜᴇʟᴘ-ɢ ᴛᴏ sᴇᴇ  ᴀʟʟ
┃┄⊰          ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏғ ᴏᴜʀ 
┃┄⊰          ɢᴀᴍᴇʙᴏᴛ. ᴊs ʙᴏᴛ ᴄᴀɴ 
┃┄⊰          ᴏɴʟʏ sʜᴏᴡ ᴄᴏᴍᴍᴀɴᴅ ʙᴜᴛ 
┃┄⊰          ɪᴛ ᴄᴀɴᴛ ᴘᴇʀғᴏʀᴍ ᴛʜᴏsᴇ. 
┃┄⊰          ɪғ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴜsᴇ ᴛʜᴏsᴇ 
┃┄⊰          ᴄᴏᴍᴍᴀɴᴅs ᴜsᴇ ᴛs ʙᴏᴛ.
┃┄⊰❀ 3. ᴛʏᴘᴇ ʜᴇʟᴘ-ʀ ᴛᴏ ɢᴇᴛ ᴀʟʟ
┃┄⊰           ᴏᴜʀ ʀᴜʟᴇs ᴀɴᴅ ғᴏʟʟᴏᴡ
┃┄⊰           ᴇᴠᴇʀʏ sɪɴɢʟᴇ ʀᴜʟᴇs
┃┄⊰❀ 4. ᴛʏᴘᴇ ʜᴇʟᴘ-ᴀ ᴛᴏ ɢᴇᴛ ᴀʟʟ
┃┄⊰          ᴅᴇᴛᴀɪʟs ᴏғ ᴏᴜʀ ᴄᴇʟᴇsᴛɪᴄ 
┃┄⊰          ʙᴏᴛᴢ ᴀssᴏᴄɪᴀᴛɪᴏɴ ʀᴇᴀᴅ
┃┄⊰          ᴄᴀʀᴇғᴜʟʟʏ ᴛᴏ ɢᴇᴛ ᴀʟʟ sᴏᴜʀᴄᴇs
5) type help-rpg to get Rog description 
 
ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍᴏᴅs ᴛʏᴘᴇ ${prefix}ᴅᴇᴠs

ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ©2023 ʙʏ ᴛᴇᴀᴍ ᴄᴇʟᴇsᴛɪᴄ

ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ`;
        await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
     }
}
