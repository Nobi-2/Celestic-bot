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
💡 Item: RUBY
💰 Cost: 100000000 gold
💻 Usage: ${prefix}buy ruby
💬 Description: A mythical stone that signifies the power of azunai the dragon of fire element!
        
#2
💡 Item: EMERALD
💰 Cost: 100000000 Gold
💻 Usage: ${prefix}buy emerald
💬 Description: A mythical stone that signifies the power of lukas the dragon of air element! 💎
        
#3
💡 Item: SAPPHIRE
💰 Cost: 100000000 Gold
💻 Usage: ${prefix}buy sapphire
💬 Description: A mythical stone that signifies ghe power of uzuni the dragon of water! 
        
#4
💡 Item: AMETHEIST
💰 Cost: 5 silver Apple
💻 Usage: ${prefix}buy ametheist
💬 Description: A mythical stone that signifies the power of kizuka the dragon of shadows💎💰

#5
💡 Item: DIAMOND
💰Cost: 2 Golden Apple
💻 Usage: ${prefix}buy diamond
💬 Description: A mythical stone that signifies the power of lufero the dragon of light!
` }, { quoted: m });
    }
}
