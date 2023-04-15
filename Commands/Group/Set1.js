const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "set1",
    alias: ["set-1"],
    desc: "Gives all switches",
    react: "♨️",
    category: "groups",
    usage: "set1",
    start: async (Miku, m, {prefix,pushName}) => {


  const sections = *ECONOMY*
   [{
    "title": "ECONOMY ON",
    "rows": [
        {
            "title": `${prefix}economyswitch on`,
            "rowId": `${prefix}economyswitch on`
        }
       ]
   },
        {
           "title": "economyswitch off",
    "rows": [
        {
            "title": `${prefix}economyswitch off`,
            "rowId": `${prefix}economyswitch off`
        }
       ]
   },
             *BOT*
        {
           "title": "botswitch on",
    "rows": [
        {
            "title": `${prefix}botswitch on`,
            "rowId": `${prefix}botswitch on`
        }
       ]
   },
        {
           "title": "botswitch off",
    "rows": [
        {
            "title": `${prefix}botswitch off`,
            "rowId": `${prefix}botswitch off`
        }
    ]
}
]
let con = `
Hello, 
1 | Please select an option you want to enable of disable.
`
let ments = [m.sender]

const listMessage = {
footer: `*${botName}*`,
text: 'Powered By TEAM CELESTIC',
title: con,
buttonText: `CLICK HERE ⎙`,
mentions: ments,
headerType: 4,
sections
}
await Miku.sendMessage(m.from, listMessage,{ quoted:m })

}
}
