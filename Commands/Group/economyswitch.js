const { mk } = require("../../Database/dataschema.js");

module.exports = {
    name: "economy",
    alias: ["eco","ecomode"],
    desc: "Enable or disable ECONOMY commands in a group",
    category: "Group",
    usage: "economy [on/off]",
    react: "🤤",
    start: async (
      Miku,
      m,
      { args, isBotAdmin, isCreator, reply, prefix, pushName}
    ) => {
      
        if (!isCreator)
        return Miku.sendMessage(
          m.from,
          {
            text: `*${pushName}* must be *Mod* to turn ON/OFF Economy !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Miku.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });

      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, switchEconomy: "true" }).save();
          Miku.sendMessage(
            m.from,
            {
              text: `*ECONOMY* has been *Activated* in this group!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Miku.sendMessage(
            m.from,
            { text: `*ECONOMY* has been *Activated* in this group! \n\nType *${prefix}ecomenu* To get full ECONOMY commands list.` },
            { quoted: m }
          );
        } else {
          if (checkdata.switchEconomy == "true")
            return Miku.sendMessage(
                m.from,
                { text: `*ECONOMY* is already *Activated* in this group!\n\nType *${prefix}ecomenu* To get full ECONOMY commands list.` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { switchEconomy: "true" });
          return Miku.sendMessage(
            m.from,
            { text: `*ECONOMY* has been *Activated* in this group!\n\nType *${prefix}ecomenu* To get full ECONOMY commands list.` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, switchEconomy: "false" }).save();
          return Miku.sendMessage(
            m.from,
            { text: `*ECONOMY* has been *De-Activated* in this group !` },
            { quoted: m }
          );
        } else {
          if (checkdata.switchEconomy == "false") return Miku.sendMessage(
            m.from,
            { text: `*ECONOMY* is already *De-Activated* in this group !` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { switchEconomy: "false" });
          return Miku.sendMessage(
            m.from,
            { text: `*ECONOMY* has been *De-Activated* in this group !` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}economy on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}economy off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage5} ,
          caption: `\n*「 ECONOMY Configuration 」*\n\nPlease click the button below\n\nNote: This command will enable all ECONOMY commands in this group.\n`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Miku.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};
