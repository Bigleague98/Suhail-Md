const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPMEpOUVdTMlNod2RLZlgyUVRFTEI5SngxMzJ5Ulp1b0tRQ1NuKzBsRFNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNMHdfLVVMX1FHS1dQM2ZqLXpJekFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwZTc2NTU0LTU5ZmUtNDI1YS05M2QxLTY1ZWRhZTgxYTgwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAxMDgsXG4gICAgICAxMjYsXG4gICAgICAxMjIsXG4gICAgICAxNyxcbiAgICAgIDE5NyxcbiAgICAgIDU4LFxuICAgICAgMjM1LFxuICAgICAgMTc2LFxuICAgICAgMTA3LFxuICAgICAgMjE0LFxuICAgICAgMTAzLFxuICAgICAgMTgyLFxuICAgICAgMTU0LFxuICAgICAgMTQxLFxuICAgICAgMTk0LFxuICAgICAgMjM0LFxuICAgICAgMTUyLFxuICAgICAgMjAzLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDIxOCxcbiAgICAgIDIwNixcbiAgICAgIDg0LFxuICAgICAgNzIsXG4gICAgICAyMDUsXG4gICAgICAyNyxcbiAgICAgIDkxLFxuICAgICAgNTksXG4gICAgICAyMDMsXG4gICAgICAxNzgsXG4gICAgICAxNTIsXG4gICAgICA3NyxcbiAgICAgIDE1OSxcbiAgICAgIDE1NixcbiAgICAgIDMsXG4gICAgICAyMTYsXG4gICAgICAyMzUsXG4gICAgICAxMTcsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDSGtlNERFS25Nd2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZURSUSt6N3cveHZRN1c1OU4zTnRYMmNJbjdjTkIrbFM0eXZESkRaeXZUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGQ3prcVdETFNFdGxxOGZCWCtFMWhzTzhVUkRYMDBqOG1CYmVOc2lmL1gySGtOSHowclR3d3ZpZ0hTS2dYMXkrZTYyeG5HaGQva1JHOW8zb2V5ZkxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6WUtGR05pMlZMbUMzUk1wOUhBOVpFOU1YRWl6bXhpTnk4Z1NoK0hhTEViLzVsUzZSNW5rTGt6dU5GZXB0MGJ4NC9tQVdRWVVRNFF3L1V1UEFTL1lBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNDIxODkwNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYmlnIGxlYWd1ZVwiLFxuICAgIFwibGlkXCI6IFwiMTg0NjkyMjAwNDQ4MTU0OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQyMTg5MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjQyMjIyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
