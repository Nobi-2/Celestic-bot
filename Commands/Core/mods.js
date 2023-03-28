module.exports = {
    name: "owner",
    alias: ["owners","mod","dev","devinfo","developer","mods","papa"],
    desc: "Owner of bot.",
    react: "🎗",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nKonnichiwa *${pushName}* senpai, I am *${botName}* bot._\n\nHere the List of my Mods.*_\n\n\n\n*━━❰ STATISTICS ❱━━*_\n\n\n🌸*NOBITA*\n*wa.me/917000562148*\n*Owner and editor of celestic*_\n\n🌸*SHISUI*\n*wa.me/918961331275*\n*Creator and command maker*_\n\n🌸*LUCKY*\n*wa.me/+917903576495*\n*Main devloper of js*\n\n🌸*JIRAYA*\n*wa.me+918429288800*\n*Assistant devloper of js*\n\n🌸*YUJI*\n*wa.me+265990169520*\n*Main dev of web*_\n\n🌸*KIDSAMA*\nzWa.me/+2348108631565*\n*Assistant dev of web*\n\n🌸*BAJRANG*\n*Wa.me/+918279975767*\n*Web and app maker*\n\n🌸*Steve*\n*Wa.me/+2349116124469*_\n*hoster*\n`},{quoted:m})
    }
}
