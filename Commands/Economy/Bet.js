const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);


 module.exports = { 

    name: "bet",  
    desc: "gives three times of amount.", 
    alias: ["betmoney"],
    category: "Economy",  
    react: "💸", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, ECOstatus} 
    ) => {
      if (ECOstatus == "false") return m.reply(`This group is not Economy enabled!\n\nTo configure Economy mode, type:\n\n*${prefix}ecomenu*`);
        const user = m.sender
	
        var texts = text.split(" ");
     var opp = texts[1];// your value
     var value = texts[0].toLowerCase();
     var gg = parseInt(value);
     const cara = "cara";
     const balance = await eco.balance(user, cara);
     const g = (balance.wallet) > parseInt(value);
     const k = 20000 - 1000000000;
     const a = (k) > parseInt(value);
     const triple = gg * 3;
     const f = ["up", "right", "left", "down", "shisui", "nobita", "yuji", "lucky", "steve", "kidsama", "jiraya", "bajrang"]
     const r = f[Math.floor(Math.random () * f.length)]
     if (!text) return m.reply(
				`Usage:  *${prefix}bet 100 left/right/up/down/AnyBotModNames*\n\nExample:  *${prefix}bet 50000 left*`
			);

        if (!value) return m.reply("*Please, specify the amount you are betting with!*");
        if (!opp) return m.reply("*Specify the direction you are betting on!*");
        if (!gg) return m.reply("*Check your text please, You are using the command in a wrong way*");
        if (g == false) return m.reply(`*You don't have sufficient 🪙 Diamond to bet with*`);
        if (a == true) return m.reply(`*Sorry ${m.pushName}, you can only bet with more than 20000 and less than 1000000000🪙.*`);
        if (r == opp){
           let give = await eco.give(user , cara, triple);
           let buttons = [
            {
              buttonId: `${prefix}slot`,
              buttonText: { displayText: "slot🎰" },
              type: 1,
            },
            {
                buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet 💳" },
              type: 1,

            },
          ];
          let buttonMessage = {
            image: fs.readFileSync("./Assets/Img/card.png"), 
            caption: `*📈 You won 💴 ${triple}*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
         else{
         let deduct = await eco.deduct(user, cara, texts[0]);
         let buttons = [
            {
              buttonId: `${prefix}slot`,
              buttonText: { displayText: "Slot 🎰" },
              type: 1,
            },
            {
                buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet 💳" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `*📉 You lost 💴 ${texts[0]}*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
}
