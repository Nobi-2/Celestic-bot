module.exports = {
  name: "revoke",
  alias: ["resetlink", "resetgclink", "resetlinkgroup", "resetlinkgc"],
  desc: "Reset group link",
  category: "Group",
  usage: "revoke",
  react: "🔗",
  start: async (Miku, m, { prefix, isBotAdmin, isAdmin }) => {
    if (m.from == "120363040838753957@g.us")
      return m.reply(
        "Sorry, this command is not allowed in *Atlas Support Group* !\n\nYou are not allowed to change support group link !"
      );

    if (!isAdmin) return m.reply(`*${pushName}* must be admin in order to use this command !`);
    if (!isBotAdmin) return m.reply(`Bot must be admin in order to use this command !`);

    try {
      await Miku.groupRevokeInvite(m.from).then((res) =>
        Miku.sendMessage(
          m.from,
          { text: `Group link has been *Updated* Successfully!` },
          { quoted: m }
        )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
