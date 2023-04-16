const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "fruit-shop",
    desc: "To view the list of fruits available in the shop",
    alias: ["fruit-store"],
    category: "RPG",
    usage: "fruit-shop",
    react: "🛍",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `🛍️ 💎 ${global.botName} FRUIT-STORE 💎 🛍️

        👋 Hi there! 🤗 Welcome to the ${global.botName} Store.💼 Here's what you can purchase using Gold 💰:
        
#1
💡 Item: SILVER APPLE
💰 Cost: by platinum pickaxe hunt or ask devlopers
💻 Usage: ${prefix}buy silverapple
💬 Description: this apple will help u to get ruby !
        
 #2
💡 Item: GOLDEN APPLE
💰 Cost: by diamond pickaxe hunt or ask.moderator
💻 Usage: ${prefix}buy goldenapple
💬 Description: CHANCE OF GETTING HEROIC AXE💎💰

#3
💡 Item: DIAMOND APPLE
💰Cost: by heroic pickaxe hunt or ask moderator 
💻 Usage: ${prefix}buy diamondapple
💬 Description: this will help.u to get 10× of the gold you spended to buy this!
` }, { quoted: m });
    }
}
