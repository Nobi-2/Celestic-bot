const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "stone-shop",
    desc: "To view the list of stones available in the shop",
    alias: ["stone-store"],
    category: "RPG",
    usage: "stone-shop",
    react: "🛍",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `🛍️ 💎 ${global.botName} STONE-STORE 💎 🛍️

        👋 Hi there! 🤗 Welcome to the ${global.botName} Store.💼 Here's what you can purchase using Gold 💰:
        
#1
💡 Item: 100k golds
💰 Cost: 10 woods
💻 Usage: ${prefix}buy 100k
💬 Description: free gold for users 
        
#2
💡 Item: 100m golds 
💰 Cost: 1000 woods
💻 Usage: ${prefix}buy 100m
💬 Description: gold! 💎
        
#3
💡 Item: 100b golds 
💰 Cost: 3 ruby/sapphire/emerald
💻 Usage: ${prefix}buy 100m
💬Description: gold
` }, { quoted: m });
    }
}
