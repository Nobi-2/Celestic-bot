
const mongoose = require("mongoose");
const { shop, player, axe } = require("../../Database/rpgschema.js");

module.exports = {
    name: "mine-god",
    desc: "Hunt, mine, dig or chop for resources.",
    alias: ["hunt-god"],
    category: "RPG",
    usage: "hunt/mine/dig/chop [axe]",
    react: "🔨",
    start: async (Miku, message, { text, prefix, args, eco, ty }) => {
        const user = await player.findOne({ id: message.sender });

        if (!user) {
            return Miku.sendMessage(message.from, { text: `😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: message });
        }

        const axeUsed = args[0];

        if (!axeUsed) {
            return Miku.sendMessage(message.from, { text: `😕 You need to specify which axe to use (godpickaxe).` }, { quoted: message });
        }

        if (!user.inventory[axeUsed]) {
            return Miku.sendMessage(message.from, { text: `😕 You don't have a ${axeUsed}. Use ${prefix}buy to purchase one.` }, { quoted: message });
        }

        const axes = {
            godpickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 100000) + 200000,
                    stone: () => Math.floor(Math.random() * 2000000) + 400000,
                    iron: () => Math.floor(Math.random() * 1000000) + 400000,
                    golds: () => Math.floor(Math.random() * 10000000) + 4000000,
                    diamonds: () => Math.floor(Math.random() * 1001) + 10000,
                    diamondApple: () => Math.random() <= 100.00
                }
            }
        };

        const selectedAxe = axes[axeUsed];

        if (!selectedAxe) {
            return Miku.sendMessage(message.from, { text: `😕 Invalid axe specified, valid axes are (godaxe).` }, { quoted: message });
        }

        user.inventory[axeUsed] -= selectedAxe.decrement;
            const loot = {};
    for (const resource in selectedAxe.loot) {
        loot[resource] = selectedAxe.loot[resource]();
        if (resource !== "diamondApple") {
            user.inventory[resource] += loot[resource];
        } else if (loot[resource]) {
            user.inventory.diamondApple += 1;
        }
    }

    await user.save();

    let lootMessage = `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`;
    if (loot.diamondApple) {
        lootMessage += `\n\n🍎You found a diamond Apple!🍎`;
    }

    Miku.sendMessage(message.from, { text: lootMessage }, { quoted: message });
}
};
