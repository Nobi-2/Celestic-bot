module.exports = {
    name: "hi",
    alias: ["hello","hey"," konnichiwa","nobii"],
    desc: "Say hello to bot.",
    react: "🐼",
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
            caption:`\nKonnichiwa *${pushName}* Senpai\nI am *${botName}* bot\nType *${prefix}help* to get my full command list.\n\n_🌸 Server Uptime:_ *${uptime()}*\n_❄️ Status:_ *Operational*\n`},
            {quoted:m})
    }
}
