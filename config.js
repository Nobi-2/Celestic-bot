/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/            d88888 888    888                        8888b   d8888 888  "Y88b      /
/           d88P888 888    888                        88888b.d88888 888    888      /
/          d88P 888 888888 888  8888b.  .d8888b       888Y88888P888 888    888      /
/         d88P  888 888    888     "88b 88K           888 Y888P 888 888    888      /
/        d88P   888 888    888 .d888888 "Y8888b.      888  Y8P  888 888    888      /
/       d8888888888 Y88b.  888 888  888      X88      888   "   888 888  .d88P      /
/      d88P     888  "Y888 888 "Y888888  88888P'      888       888 8888888P"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: FantoX                                                 /
/ Github: https://github.com/FantoX001/Atlas-MD                                     /
/ Powered By: Team ATLAS                                                            /
/-----------------------------------------------------------------------------------/
/             Meet Team ATLAS who holds all rights to this repository:              /
/                                                                                   /
/ 1. Pratyush - https://github.com/pratyush4932                                     /
/ 2. Ahmii - https://github.com/Ahmii-kun                                           /               
/ 3. Kai - https://github.com/Kai0071                                               /                    
/ 4. Devime - https://github.com/Devime69                                           /
/ 5. Jay JayOps - https://github.com/jayjay-ops                                     /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/


require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "917903576495";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://Lucky2:Lucky2@cluster0.mw4duxl.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "L2";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyBgZ1LpfjhwHRK9LBSa9uUrfM1rid4ifIM";
global.packname = "𝄟✮͢🦋⃟≛⃝ .⃟✮⃝ Obito𝄟⃝ 𝄟✮⃝⃝💞";
global.author = process.env.AUTHOR || "☠⃝𝐓𝐡𝐞☠𝐋𝐨𝐬𝐭☠𝐔𝐜𝐡𝐢𝐡𝐚";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

