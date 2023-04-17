module.exports = {
    name: "bots",
    desc: "Displays bot lists",
    alias: ["bots"],
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
        let textHelpMenu = `*━━━❰ GROUPS ❱━━━*

━━━❰ GAMEBOT GROUP❱━━━
LINK = 
DESC = HERE U CAN PLAY BOT GAMES

━━━❰ MAINBOT GROUPS ❱━━━
LINK =
DESC = HERE U CAN ENJOY OUR FEATURES

━━━❰ PUBLIC GROUPS ❱━━━
LINK = 
DESC = YOU CAN ENJOY HERE THE THIRD BIT AND OUR PUBLIC NOT HELPS DURING DEPLOY.
