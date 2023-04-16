const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "reg-inv",
    desc: "Register your inventory.",
    alias: ["register-inv"],
    category: "RPG",
    usage: "register",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
        if(!user){
            await player.create({id:m.sender, inventory: {wood: 0, stone: 0, iron: 0, diamonds: 0, ruby: 0, emerald: 0, ametheist: 0, sapphire: 0, diamondpickaxe: 0, ironpickaxe: 0, platinumpickaxe: 0, stonepickaxe: 0, heroicpickaxe: 0,
  woodenaxe: 0, silverApple: 0, diamondApple: 0, goldenApple: 0 }});
            Miku.sendMessage(m.from, { text: `📦 Inventory created! Use ${prefix}inventory to view your inventory.` }, { quoted: m });
        } else {
            Miku.sendMessage(m.from, { text: `📦 You already have an inventory. Use ${prefix}inventory to view it.` }, { quoted: m });
        }
    }
}
