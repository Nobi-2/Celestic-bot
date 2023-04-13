module.exports = {
    name: 'help-g',
    desc: 'Displays bot lists',
    alias: ['menu-g','h-g'],
    category: 'Core',
    usage: 'stats',
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
let textHelpMenu = `*━━━❰ GAMEBOT ❱━━━*
TYPE ${prefix}HELP 

*➩ Characters Side*

   ❐ claim, gchara, gallery, schara

*➩ Economy Side*

   ❐ bank, daily, deposit, gamble, give, rob, slot, wallet, withdraw

*➩ Fun Side*

   ❐ friendship, reaction, ship, simp, triggered, fact

*➩ Games Side*

   ❐ answer, forfeit-quiz, quiz

*➩ General Side*

   ❐ help, hi, info, mods, profile, rank, repo, set-bio

*➩ Media Side*

   ❐ lyrics, play, spotify, yta, yts, ytv

*➩ Moderation Side*

   ❐ close, delete, demote, open, ping, promote, purge, remove, set

*➩ Weeb Side*

   ❐ manga, anime, character, divorce, haigusha, hg, kitsune, loli, marry, neko, waifu

*➩ Pokemon Side*

   ❐ catch, pokedex, party, pc, pokemon, swap, t2party, t2pc, trade, trade-confirm, trade-delete

*➩ Utils Side*

   ❐ define, github, prettier, quotly, react, retrieve, steal, sticker, upload, urbandictionary

📕 *Note: we are doing iur best to bring update*
`;
await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
    }
  },
};
