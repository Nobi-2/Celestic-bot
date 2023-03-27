module.exports = {
    name: "owner",
    alias: ["owners","mod","mods","papa"],
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
        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nKonnichiwa *${pushName}* senpai, I am *${botName}* bot._\n Here the List of my Mods.*_\n\n\n\n*━━❰ STATISTICS ❱━━*_\n\n\n🌸*NOBITA owner wa.me/917000562148*_\n*Owner and editor of celestic*_\n\n🌸*SHISUI wa.me/918961331275*_\n*Creator and command maker*_\n\n🌸*LUCKY wa.me/+917903576495*_\n*Main devloper of js*_\n\n🌸*JIRAYA wa.me+918429288800*_\n*Assistant devloper of js*_\n\n🌸*YUJi wa.me+265990169520*_\n*Main dev of ts*_\n\n🌸*KIDSAMA Wa.me/+2348108631565*_\n*Assistant dev of ts*_\n\n🌸*BAJRANG Wa.me/+918279975767*_\n*Web and app maker*_\n\n🌸*Steve Wa.me/+2349116124469*_\n*hoster*\n`},{quoted:m})
    }
}