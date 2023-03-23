module.exports = {
    name: "ecomenu",
    alias: ["ecolist","economymenu","economyh","ecoh","economyhelp","ecohelp"],
    desc: "Get full Economy List", 
    category: "Group",
    usage: `helplist`,
    react: "💷",
    start: async (Miku, m, { prefix,ECOstatus }) => {
  
      if (ECOstatus == "false") return m.reply(`This group is not ECONOMY enabled!\n\nTo configure ECONOMY mode, type:\n\n*${prefix}eco on*`);

      let etext = `\n✦      ╔═════ஓ๑♡๑ஓ═════╗
✦────✦       ECONOMY      ✦────✦
✦      ╚═════ஓ๑♡๑ஓ═════╝
┃┄⊰❀ ʟʙ
┃┄⊰❀ ʀᴏʙ
┃┄⊰❀ ꜱʟᴏᴛ
┃┄⊰❀ ʙᴀɴᴋ
┃┄⊰❀ ᴅᴀɪʟʏ
┃┄⊰❀ ᴡᴀʟʟᴇᴛ
┃┄⊰❀ ᴛʀᴀɴꜱꜰᴇʀ
┃┄⊰❀ ᴡɪᴛʜᴅʀᴀᴡ
┃┄⊰❀ ᴅᴇᴘᴏꜱɪᴛ
┃┄⊰❀ ɢᴀᴍʙʟᴇ
┃┄⊰❀ ᴄᴀᴘᴀᴄɪᴛʏ
┖❀⊱┄┄┄┄┄┄┄┄┄┄┄⊰❀\n\n
🎀 Powered By: CELESTIC TEAM ©2023`

await Miku.sendMessage(m.from, {image: {url: botImage5}, caption: etext}, { quoted: m })
    }
}
