const googleit = require("google-it");

module.exports = {
    name: "google",
    alias: ["search"],
    desc: "Search something in google",
    category: "Search",
    usage: `google <search term>`,
    react: "⚙️",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Search Term !` },
          { quoted: m }
        );
      var googlesearchTerm = args.join(" ");

        var googleSearch = await googleit({ query: googlesearchTerm }).then(
            (response) => response
            ).catch((error) => {
            console.log(error);
            });

        let resText = `  *『  🌀 Google Search Engine 🌀  』*\n\n\n_🔍 Search Term:_ *${googlesearchTerm}*\n\n\n`

        for(num=0; num<10; num++){
            resText += `_❄️ Result:_ *${num+1}*\n\n_📨 Title:_ *${googleSearch[num].title}*\n\n_🔶 Description:_ *${googleSearch[num].snippet}*\n\n_🔷 Link:_ *${googleSearch[num].link}*\n\n\n`;
        }

      await Miku.sendMessage(
        m.from,
        {
          video: {url: 'https://media.tenor.com/3aaAzbTrTMwAAAPo/google-technology-company.mp4'},
          gifPlayback: true,
          caption: resText,
        },
        { quoted: m }
      );
    },
  };
  