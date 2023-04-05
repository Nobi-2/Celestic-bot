const fs = require("fs");
const config = require("../../config");
const eco = require("discord-mongoose-economy");
const ty = eco.connect(config.mongodb);

module.exports = {
  name: "transfer",
  desc: "transfer gold.",
  alias: ["give"],
  category: "Economy",
  react: "💴",
  start: async (Miku, m, { text, prefix, mentionByTag, pushName }) => {
    if (ECOstatus == "false") return m.reply(`This group is not Economy enabled!\n\nTo configure Economy mode, type:\n\n*${prefix}ecomenu*`);
    let value = text.trim().split(" ");
    if (value[0] === "") return m.reply(`Use ${prefix}transfer 100 @user`);
    if (!text && !m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag any user ${pushName} senpai 🤦‍♂️ !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let user = (await mentionedUser) || m.msg.contextInfo.participant;
    //let user = mentionByTag[0];

    const cara = "cara";
    const user1 = m.sender;
    const user2 = user;
    const word = value[0];
    const code = value[1];
    let d = parseInt(word);
    if (!d)
      return m.reply(
        "check your text plz u r using the command in a wrong way👀"
      );
    const balance = await eco.balance(user1, cara);
    let a = balance.wallet < parseInt(word);
    //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    if (a == true)
      return m.reply("you dont have sufficient money to transfer👎");

    const deduct = await eco.deduct(user1, cara, value[0]);
    const give = await eco.give(user2, cara, value[0]);

    await Miku.sendMessage(
      m.from,
      {
        image: fs.readFileSync("./Assets/Img/card.png"),
        caption: `*📠 Transaction successful of ${word} 💷*`,
      },
      { quoted: m }
    );
  },
};
