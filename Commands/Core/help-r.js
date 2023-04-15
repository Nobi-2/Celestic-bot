module.exports = {
    name: "rules,
    desc: "See bot rules",
    alias: ["r","help-r"],
    category: "Core",
    usage: "stats",
    react: "📊",
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `*━━❰ CELESTIC RULES AND NOTICE ❱━━*
┃┄⊰❀ 1. ᴜsᴇʀs ʜᴀᴠᴇ ᴛᴏ ᴊᴏɪɴ 
┃┄⊰          ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ
┃┄⊰          ғᴏʀ ᴀɴʏ ǫᴜᴇʀʏ. ᴛʏᴘᴇ
┃┄⊰          ${prefix}sᴜᴘᴘᴏʀᴛ ᴛᴏ ɢᴇᴛ ʟɪɴᴋ*
┃┄⊰❀ 2. ᴜsᴇʀs ᴄᴀɴ ᴊᴏɪɴ ᴄᴀsɪɴᴏ 
┃┄⊰          ɢʀᴏᴜᴘ ᴛᴏ ɢᴇᴛ ᴇᴄᴏɴᴏᴍʏ  
┃┄⊰          ғᴇᴀᴛᴜʀᴇs ᴛʏᴘᴇ ${prefix}ᴄᴀsɪɴᴏ 
┃┄⊰          ᴛᴏ ɢᴇᴛ ᴄᴀsɪɴᴏ ʟɪɴᴋ*
┃┄⊰❀ 3. ᴅᴏɴ*ᴛ sᴘᴀᴍ ɪғ ʏᴏᴜ sᴘᴀᴍ 
┃┄⊰          ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙᴀɴɴᴇᴅ*
┃┄⊰❀ 4. ɪғ ʏᴏᴜ sᴘᴀᴍ ᴏʀ ᴛᴇxᴛ ʙᴏᴛ ɪɴ 
┃┄⊰          ᴘᴇʀsᴏɴᴀʟ ᴄʜᴀᴛ. ᴛʜᴇɴ 
┃┄⊰          ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ*
┃┄⊰❀ 5. ɪғ ʏᴏᴜ call ʙᴏᴛ ʏᴏᴜ 
┃┄⊰          ᴡɪʟʟ ʙᴇ ʙᴀɴɴᴇᴅ*
┃┄⊰❀ 6. ᴅᴏɴ*ᴛ sᴇɴᴅ ɢᴄ ʟɪɴᴋ ɪɴ
┃┄⊰          ᴄᴀsɪɴᴏ ɢᴄ*
┃┄⊰❀ 7. ᴄᴜʀʀᴇɴᴛʟʏ ᴏɴʟʏ ᴏɴᴇ ʙᴏᴛ 
┃┄⊰          ᴀᴄᴛɪᴠᴇ so ɴᴏ ᴍᴏʀᴇ ɢᴄs. 
┃┄⊰          ᴡʜᴇɴ ᴡᴇ ᴀᴅᴅ ᴍᴏʀᴇ ʙᴏᴛ.   
┃┄⊰          ᴛʜᴇɴ ʏᴏᴜ ᴄᴀɴ ᴀsᴋ ғᴏʀ 
┃┄⊰          ʙᴏᴛ.
┃┄⊰❀ 8. ɪғ ʏᴏᴜ ʙᴇ ᴀᴄᴛɪᴠᴇ ɪɴ ᴏᴜʀ 
┃┄⊰          ɢʀᴏᴜᴘs ʏᴏᴜ ᴡɪʟʟ ɢᴇᴛ 
┃┄⊰          ᴘʀɪᴢᴇs*
┃┄⊰❀ 9. ᴡᴇ ᴅᴏɴ*ᴛ ɴᴇᴇᴅ ᴍᴏᴅs 
┃┄⊰          ᴅᴏɴ*ᴛ ᴀsᴋ ғᴏʀ ᴍᴏᴅ*
┃┄⊰❀ 10. ʙᴏᴛ ᴡɪʟʟ ʙᴇ ᴀᴅᴅᴇᴅ ɪɴ 
┃┄⊰          ᴀᴄᴛɪᴠᴀᴛᴇ ᴡɪᴛʜ 70+  
┃┄⊰          ᴍᴇᴍʙᴇʀs ɢʀᴏᴜᴘs*
 
ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍᴏᴅs ᴛʏᴘᴇ ${prefix}ᴅᴇᴠs

ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ©2023 ʙʏ ᴛᴇᴀᴍ ᴄᴇʟᴇsᴛɪᴄ

ᴄᴇʟᴇsᴛɪᴄ ʙᴏᴛᴢ ɪɴᴄ`;
        await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
     }
}
