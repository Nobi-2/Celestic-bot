const { styletext } = require('../../lib/scrapper');

module.exports = {
    name: "textdesign",
    alias: ["fonts"],
    desc: "To applt cool fonts on text.",
    category: "Media",
    usage: `fonts <text>`,
    react: "✒️",
    start: async (Miku, m, { text, prefix, args, mime }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Text BAKA !` },
          { quoted: m }
        );

        let anu = await styletext(text)
        let teks = ``
        for (let i of anu) {
            teks += `〄   ${i.result}\n\n`
        }
        m.reply(teks)
    }
}