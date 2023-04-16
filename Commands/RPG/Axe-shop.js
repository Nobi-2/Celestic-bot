const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "axe-shop",
    desc: "To view the list of axe available in the shop",
    alias: ["axe-store"],
    category: "RPG",
    usage: "axe-shop",
    react: "🛍",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `🛍️ 💎 ${global.botName} AXE-STORE 💎 🛍️

        👋 Hi there! 🤗 Welcome to the ${global.botName} Axe-Store.💼 Here's what you can purchase using Gold 💰:
        
#1
💡 Item: Wooden-Axe
💰 Cost: 200000 Gold
💻 Usage: ${prefix}buy woodenaxe
💬 Description: Chop down those trees for some juicy loot! 🌳
        
#2
💡 Item: Stone-Pickaxe
💰 Cost: 500000 Gold
💻 Usage: ${prefix}buy stonepickaxe
💬 Description: Mine to your heart's content with this pickaxe! 💎
        
#3
💡 Item: Iron-Pickaxe
💰 Cost: 1000000 Gold
💻 Usage: ${prefix}buy ironpickaxe
💬 Description: Mine like a pro with this top-notch pickaxe! 🔨
        
#4
💡 Item: Platinum-Pickaxe
💰 Cost: 5000000 Gold
💻 Usage: ${prefix}buy platinumpickaxe
💬 Description: The ultimate mining experience awaits!\nUsing this axe you can get a *🍎SilverAplle🍎*( rare ) 🪙💰

#5
💡 Item: diamond-pickaxe 
💰 Cost: 3 SILVER APPLE
💻 Usage: ${prefix}buy diamondpickaxe
💬 Description: Only few can get hands on a *🍎GoldenApple🍎*(very rare)

#6
💡 Item: Heroic-pickaxe 
💰 Cost: 1 GOLDEN APPLE
💻 Usage: ${prefix}buy heroicpickaxe
💬 Description: Only few can get hands on a *🍎DiamondApple🍎*(very rare)
` }, { quoted: m });
    }
}
