module.exports = {
  name: "announce",
  alias: ["anounce", "announ"],
  desc: "Tag all group member without @ mention",
  category: "Group",
  usage: "announce <your message>",
  react: "📢",
  start: async (
    Miku,
    m,
    { text, prefix, isAdmin, isCreator, participants, args, buttonId }
  ) => {
    if (!isCreator) return m.reply(`*${pushName}* must be owner in order to use this command !`);
    var message = "*『 Attention Here 』*";

    if (m.quoted) {
      message = "*『 Attention Here 』*";
    } else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    }
    if (m.buttonId) {
      message = m.buttonId;
    } else if (args[0]) {
      message = args.join(" ");
    } else if (text === "") {
      message = "*『 Attention Here 』*";
    } else {
      message = "*『 Attention Here 』*";
    }
    await Miku.sendMessage(
      m.from,
      { text: message, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
