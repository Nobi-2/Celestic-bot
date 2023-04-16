const axios = require("axios");

module.exports = {
  name: "nobi",
  alias: ["nobita","Nobi","Billa"],
  desc: "Give a random fact.",
  react: "🐈‍⬛",
  category: "Fun",
  start: async (Miku, m, { pushName, prefix }) => {
    await axios
      .get(`https://nekos.life/api/v2/fact`)
      .then((response) => {
        const tet = `*『  Random Facts  』* \n\n${response.data.fact}`;

        Miku.sendMessage(
          m.from,
          { image: { url: pic }, caption: tet + "\n" },
          { quoted: m }
        );
      })
      .catch((err) => {
        m.reply(`ʜʟᴏ ɪᴛꜱ ɴᴏʙɪ😶🐈‍⬛.`);
      });
  },
};
