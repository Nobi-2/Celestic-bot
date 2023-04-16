const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "buy",
    desc: "Buy mining equipment.",
    alias: ["buy", "purchase"],
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
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 5000000);
user.inventory.platinumpickaxe += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased an platinum pickaxe!`}, { quoted: m });
}
else if(item === "heroicpickaxe") {
    if(user.inventory.goldenApple < 1) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Golden Apple to purchase heroicpickaxe.` }, { quoted: m });
    }
    user.inventory.goldenApple -= 1;
    user.inventory.heroicpikaxe += 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased heroicpickaxe Gold!`}, { quoted: m });
 }   
else if(item === "diamondpickaxe") {
    if(user.inventory.SilverApple < 3) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Silver Apple to purchase a diamondpickaxe.` }, { quoted: m });
    }
    user.inventory.SilverApple -= 3;
    user.inventory.diamondpickaxe += 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a diamondpickaxe!`}, { quoted: m });
 }
 else if(item === "ruby") 
if(balance.wallet < 100000000) {
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 100000000);
user.inventory.ruby += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a ruby!`}, { quoted: m });
} 
 else if(item === "emerald") 
if(balance.wallet < 100000000) {
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 100000000);
user.inventory.emerald += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a emerald!`}, { quoted: m });
} 
 else if(item === "sapphire") 
if(balance.wallet < 100000000) {
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 100000000);
user.inventory.sapphire += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a sapphire!`}, { quoted: m });
}
else if(item === "ametheist") {
    if(user.inventory.SilverApple < 5) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have  Silver Apple to purchase a diamondpickaxe.` }, { quoted: m });
    }
    user.inventory.SilverApple -= 5;
    user.inventory.ametheist += 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a ametheist!`}, { quoted: m });
 }
 else if(item === "diamond") {
    if(user.inventory.goldenApple < 2) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Golden Apple to purchase heroicpickaxe.` }, { quoted: m });
    }
    user.inventory.goldenApple -= 2;
    user.inventory.diamond += 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased diamond!`}, { quoted: m });
 }
 else if(item === "100k") {
    if(user.inventory.wood < 100) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have 100 woods to purchase 100k Gold.` }, { quoted: m });
    }
    const give = await eco.give(m.sender, cara, 100000);
    user.inventory.wood -= 100;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased 100k Gold!`}, { quoted: m });
} 
else if(item === "10m") {
    if(user.inventory.stones < 1000) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have stones to purchase 100k Gold.` }, { quoted: m });
    }
    const give = await eco.give(m.sender, cara, 10000000);
    user.inventory.stone -= 1000;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased 10m Gold!`}, { quoted: m });
} 
else if(item === "100m") {
    if(user.inventory.silverApple < 1) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Golden Apple to purchase 100k Gold.` }, { quoted: m });
    }
    const give = await eco.give(m.sender, cara, 100000000);
    user.inventory.silverApple -= 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased 100k Gold!`}, { quoted: m });
} 
else {
return Miku.sendMessage(m.from, { text: `😕 Invalid item. Please use ${prefix}buy /item to purchase an item.` }, { quoted: m });
}
}
};

              
              
             
              
              
              
              
