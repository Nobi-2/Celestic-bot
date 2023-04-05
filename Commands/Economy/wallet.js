const fs = require("fs");
require("../../Database/dataschema.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);


module.exports = { 

    name: "wallet",  
    desc: "Shows Wallet.",
    alias: ["wallet"], 
    category: "Economy",  
    react: "👝", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator, ECOstatus} 
    ) => {
    if (ECOstatus == "false") return m.reply(`This group is not Economy enabled!\n\nTo configure Economy mode, type:\n\n*${prefix}ecomenu*`);
    if (m.quoted) {
    var mentionedUser = m.quoted.sender;
  }
    if (m.quoted) {
    var mentionedUser = mentionByTag[0];
  } else {
    var mentionedUser = m.sender;
  }
    let user = (await mentionedUser) || m.msg.contextInfo.participant; 
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         
    await Miku.sendMessage(
      m.from,
      {
       image: fs.readFileSync("./Assets/Img/card.png"),
       caption: `\n💳 *${m.pushName}'s Wallet:*\n\n_💴 ${balance.wallet}_`,
      },
      { quoted: m }
    );
  },
};

        
