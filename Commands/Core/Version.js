module.exports = {
    name: "versions",
    desc: "Displays bot lists",
    alias: ["v"],
    category: "Core",
    usage: "stats",
    react: "🔢",
    start: async(Miku, m,{text, pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        let textHelpMenu = `* version
V1.0 new name
V2.0 new logos
V3.0 new character
V4.0 new APIs and links
V5.0 new commands rg and ag
V6.0 new commands test
V7.0 codes edit 
V8.0 economy enable and rpg update
V9.0 removed buttons
V10.0 rpg re-code and fixed
`;
        await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
     }
}
