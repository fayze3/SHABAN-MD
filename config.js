const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEo5bFZLTXJwT3FmVDJMS3c4bVh1Q3hWWFNWbVlhVjhOay8yUjUxMnMxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzZYdDcyQk80L3BDVHNGSFNxN1lFSXh1UDNLZXI4eWF3U3BDaTNoNFdYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RUhNaUhjTXkxTm9wQ2U1Vm9zMGU1SVNkWFdxWlE5T3hXR3hOMjRJNlZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUWlGRGRjTzZPaERJVVZkaHo1MnM1L01oODl4b3dtOVpoemJ5UnJuS25nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCRWNWd1NWRjd1RW12a3BMU2l4YmxBWWxhRXVWdUZsYnpkQW01YVdzbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8xeXF6NEI2VlQ3V1pVdS9VRmFVUlU1NXJTbndMTnBUVkhZS2JvUjdCSDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5MVVVpVTg4OGFVbDZFM3ErRnZqODljUkR0MEVZWE1Fem5vd1JlcjFrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnJmTlR5WC9QS1lmNldIeWZKTlRrQmNkc1hsTzdSYXU2SExyejZib0VsND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBJWWlMMkZhcGZmQnpOZUxkblhxQWdQRHJVNjU0SEJkMFNyQ2lyaFBDV2M3WmtHUW96dkNvS01rN0FvQjdFQVZ5ZjV0UnhZOXpQVDZTeUcwS2h0dGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6Ilp3M2YzeXRaWXFUcDZIY1BKeWdsQStVbEM4cUszenVOajZXMkNrQWRUVG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjE5Q0JYUlkyIiwibWUiOnsiaWQiOiI5MjMzNjQ2Mjc5MDk6NzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2TlfCdk67wnZOu8J2TrSDwnZOR8J2TtfCdk6rwnZO88J2TvfCdk67wnZO7IDogKiIsImxpZCI6IjE1ODM4MTgxODA0NDU2Nzo3MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1U3hjQUJFTjNHMDhZR0dCMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlEvTnlWdnlHQm1zdjdPcC9nRExrMGtPTk94WjN5bWlJa2pOdGlxZEFMMHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ink1NGNkaXNRTy8zS2Qya2N2MmxhTnNaR3ViQUhCTXJRSGpTUG1MelBCQkdjYjk4RDhtRHI2dnNCeEViNHczd3ZvSDdzazdURHl1cXdNRjB6RFZBNENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxWEY2clpvM1FBTEFGUUttd1RlbnNVckl0NCtnUUZlZW9KdjVKOEI2TytIckw5bmwrRXJpWVRLbFVJR2JYcXcydk9tVXpwdksrZTdqRHE5dkkyM2ZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM2NDYyNzkwOTo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUHpjbGI4aGdackwrenFmNEF5NU5KRGpUc1dkOHBvaUpJemJZcW5RQzlNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg3ODIzMDQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEtLIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Fayze-Bot 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/gkx121.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "𝘍͢𝘢𝘺𝘻͍𝘦͜͡𝘦 ː 𖤍",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝘍͢𝘢𝘺𝘻͍𝘦͜͡𝘦 ː 𖤍",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923364627909",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝘍͢𝘢𝘺𝘻͍𝘦͜͡𝘦 ː 𖤍",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© Powered By 𝘍͢𝘢𝘺𝘻͍𝘦͜͡𝘦 ː 𖤍*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gkx121.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923364627909",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || " . ",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
