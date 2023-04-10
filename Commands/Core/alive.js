module.exports = {
    name: "babu",
    alias: ["baby","bs","alive"],
    desc: "Babu status.",
    react: "💙",
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
        await Miku.sendMessage(m.from,{
            image:{url:botImage2},
            caption:`\nKonnichiwa *${pushName}* Senpai\nI am *${botName}* bot \n\n_🖤I am here.\n_Active from:_ *${uptime()}*\n_🌸 Status:_ *💞💞*\n`},
            {quoted:m})
    }
}
