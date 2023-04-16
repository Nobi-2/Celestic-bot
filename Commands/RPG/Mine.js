
const mongoose = require("mongoose");
const { shop, player, axe } = require("../../Database/rpgschema.js");

module.exports = {
    name: "mine",
    desc: "Hunt, mine, dig or chop for resources.",
    alias: ["hunt", "dig", "chop"],
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
            return Miku.sendMessage(message.from, { text: `😕 You need to specify which axe to use (woodenAxe, woodPickaxe, stonePickaxe, ironPickaxe, platinumPickaxe, diamondPickaxe, heroicPickaxe).` }, { quoted: message });
        }

        if (!user.inventory[axeUsed]) {
            return Miku.sendMessage(message.from, { text: `😕 You don't have a ${axeUsed}. Use ${prefix}buy to purchase one.` }, { quoted: message });
        }

        const axes = {
            woodenaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 4) + 8,
                    stone: () => Math.floor(Math.random() * 2) + 2,
                    iron: () => Math.floor(Math.random() * 1) + 1,
                }
            },
            stonepickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 2) + 2,
                    stone: () => Math.floor(Math.random() * 2) + 4,
                    iron: () => Math.floor(Math.random() * 1) + 2,
                }
            },
            ironpickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 1) + 1,
                    stone: () => Math.floor(Math.random() * 2) + 4,
                    iron: () => Math.floor(Math.random() * 1) + 4,
                }
            },
            platinumpickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 1),
                    stone: () => Math.floor(Math.random() * 2) + 4,
                    iron: () => Math.floor(Math.random() * 1) + 4,
                    silverApple: () => Math.random() <= 0.15
                }
            }
        };
            diamondpickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 1),
                    stone: () => Math.floor(Math.random() * 2) + 4,
                    iron: () => Math.floor(Math.random() * 1) + 4,
                    goldenApple: () => Math.random() <= 0.10
                }
            }
        };
        heroicpickaxe: {
                decrement: 1,
                loot: {
                    wood: () => Math.floor(Math.random() * 1),
                    stone: () => Math.floor(Math.random() * 2) + 4,
                    iron: () => Math.floor(Math.random() * 1) + 4,
                    diamondApple: () => Math.random() <= 0.5
                }
            }
        };

        const selectedAxe = axes[axeUsed];

        if (!selectedAxe) {
            return Miku.sendMessage(message.from, { text: `😕 Invalid axe specified, valid axes are (woodenAxe, woodPickaxe, stonePickaxe, ironPickaxe, diamondPickaxe, platinumpickaxe, heroicpickaxe).` }, { quoted: message });
        }

        user.inventory[axeUsed] -= selectedAxe.decrement;
            const loot = {};
    for (const resource in selectedAxe.loot) {
        loot[resource] = selectedAxe.loot[resource]();
        if (resource !== "goldenApple") {
            user.inventory[resource] += loot[resource];
        } else if (loot[resource]) {
            user.inventory.goldenApple += 1;
        if (resource !== "diamondApple") {
            user.inventory[resource] += loot[resource];
        } else if (loot[resource]) {
            user.inventory.diamondApple += 1;
        if (resource !== "silverApple") {
            user.inventory[resource] += loot[resource];
        } else if (loot[resource]) {
            user.inventory.silverApple += 1;
        }
    }

    await user.save();

    let lootMessage = `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}`;
    if (loot.goldenApple) {
        lootMessage += `\n\n🍎You found a Golden Apple!🍎
    if (loot.silverApple) {
        lootMessage += `\n\n🍎You found a Silver Apple!🍎
    if (loot.diamondApple) {
        lootMessage += `\n\n🍎You found a Diamond Apple!🍎`;
    }

    Miku.sendMessage(message.from, { text: lootMessage }, { quoted: message });
}
};
