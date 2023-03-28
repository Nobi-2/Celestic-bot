const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 

    name: "addgold",  
    desc: "add the specific amount of gold in users wallet.", 
    alias: ["ag","addg"],
    category: "MODS",  
    react: "💴", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator, owner, modStatus } 
  ) => {
        let value = text.trim().split(" ");
    if (value[0] === "") return m.reply(`Use ${prefix}addgold 100 @user`);
    if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Sorry, only my *Owner* and *Mods* can use this command👹 !" },
        { quoted: m }
      );
      
    if (!text && !m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag any user ${pushName} senpai 🐈‍⬛ !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let user = (await mentionedUser) || m.msg.contextInfo.participant;
    //let user = mentionByTag[0];
    
    const cara = "cara"
        const user1 = m.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d)return m.reply('check that have you putted the right amount to give?');
        const balance = await eco.balance(user1, cara);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist

        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        let buttons = [
            {
              buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet 💳" },
              type: 1,
            },
            {
                buttonId: `${prefix}Bank`,
              buttonText: { displayText: "Bank 🏦" },
              type: 1,

            },
          ];
          let buttonMessage = {
            image: fs.readFileSync("./Assets/Img/card.png"), 
            caption: `*📠 Succesfully added gold to user's wallet. ${word} 💷*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
