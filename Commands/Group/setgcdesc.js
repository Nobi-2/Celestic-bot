module.exports = {
  name: "setgcdesc",
  alias: ["setdescgc", "setdesc", "setgroupdesc", "setgroupdescription"],
  desc: "Change the group description",
  category: "Group",
  usage: `setdesc <New group description>`,
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args, mime }
  ) => {
    if (!isAdmin) return m.reply(`*${pushName}* must be admin in order to use this command !`);
    if (!isBotAdmin) return m.reply(`Bot must be admin in order to use this command !`);
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a new group description !` },
        { quoted: m }
      );

    var newGCdesc = args.join(" ");

    try {
      ppgc = await Miku.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = botImage1;
    }

    await Miku.groupUpdateDescription(m.from, newGCdesc)
      .then((res) =>
        Miku.sendMessage(
          m.from,
          {
            image: { url: ppgc, mimetype: "image/jpeg" },
            caption: `*『 Group Description Changed 』*\n\n_🧩 New Description:_\n*${args.join(
              " "
            )}*`,
          },
          { quoted: m }
        )
      )
      .catch((err) => replay(jsonformat(err)));
  },
};
