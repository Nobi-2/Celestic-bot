const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "buy",
    desc: "Buy mining equipment.",
    alias: ["buy","purchase"],
    category: "RPG",
    usage: "buy <item>",
    react: "💰",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Miku.sendMessage(m.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: m });
        }
    const cara = "cara"
    const balance = await eco.balance(m.sender, cara);
    let item = text
        if(!item) {
            return Miku.sendMessage(m.from, { text:` 😕 Please specify an item to purchase. Use ${prefix}buy <item>` }, { quoted: m });
        }
        if(item === "woodenaxe") {
            if(balance.wallet < 200000) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have enough coins to purchase a wooden axe.` }, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 200000);
            user.inventory.woodenaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a wooden axe!`}, { quoted: m });
        }
        else if(item === "stonepickaxe") {
            if(balance.wallet < 500000) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have enough coins to purchase a stone pickaxe.` }, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 500000);
            user.inventory.stonepickaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a stone pickaxe!`}, { quoted: m });
        }
        else if(item === "diamondpickaxe") {
            if(user.inventory.silverApple < 3) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have silver Apples to purchase a diamond pickaxe .` }, { quoted: m });
            }
            user.inventory.diamondpickaxe += 1;
            user.inventory.silverApple -= 3;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a diamond pickaxe!`}, { quoted: m });
        }
        else if(item === "legendpickaxe") {
            if(user.inventory.goldenApple < 2) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have golden Apples to purchase a diamond pickaxe .` }, { quoted: m });
            }
            user.inventory.heroicpickaxe += 1;
            user.inventory.goldenApple -= 2;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a heroic pickaxe!`}, { quoted: m });
        }
        else if(item === "godpickaxe") {
            if(user.inventory.goldenApple < 10) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have diamond Apples to purchase a diamond pickaxe .` }, { quoted: m });
            }
            user.inventory.godpickaxe += 1;
            user.inventory.goldenApple -= 10;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a diamond pickaxe!`}, { quoted: m });
       }
       else if(item === "ironpickaxe") {
           if(balance.wallet < 1000000) {
               return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 1000000);
            user.inventory.ironpickaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased an iron pickaxe!`}, { quoted: m });
       }
       else if(item === "platinumpickaxe") {
           if(balance.wallet < 5000000) {
               return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase a platinum pickaxe.` }, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 5000000);
            user.inventory.platinumpickaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a platinum pickaxe!`}, { quoted: m });
       }
       else {
       return Miku.sendMessage(m.from, { text: `😕 Invalid item. Please use ${prefix}buy /item to purchase an item.` }, { quoted: m });
       }
  }
};

              
              
             
              
              
              
              
