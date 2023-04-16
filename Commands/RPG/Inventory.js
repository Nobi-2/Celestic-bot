const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "inventory",
    desc: "View your mine inventory.",
    alias: ["inv", "items"],
    category: "RPG",
    usage: "inventory",
    react: "💹",
    start: async (Miku, m) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Miku.sendMessage(m.from, { text: "You don't have any items in your inventory yet. Use `mine` command to get some." }, { quoted: m });
        }
        let inventory = user.inventory;
        Miku.sendMessage(m.from, { text: `[🐺 INVENTORY 🐺]\n\n*🍎 Golden Apple*: ${inventory.goldenApple}\n*Silver Apple*: ${inventory.silverApple}\n*Diamond Apple: ${inventory.diamondApple}\n*🔥 Wood*: ${inventory.wood}\n*🔮 Stone*: ${inventory.stone}\n*⚒ Iron*: ${inventory.iron}\n*ruby*: ${inventory.ruby}\n*emerald*: ${inventory.emerald}\n*ametheist*: ${inventory.ametheist}\n*sapphire*: ${inventory.sapphire}\n*💎 Diamonds*: ${inventory.diamonds}\n\n*🔨Tools🔨*\n\n*Wooden axe*: ${inventory.woodenaxe}\n*Iron axe*: ${inventory.ironpickaxe}\n*Stone axe*: ${inventory.stonepickaxe}\n*platinum axe*: ${inventory.platinumickaxe}\n*heroic axe*: ${inventory.heroicpickaxe}\n*Diamond axe*: ${inventory.diamondpickaxe}` }, { quoted: m });
    }
}



