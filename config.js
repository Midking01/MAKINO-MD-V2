const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["Joshuamambo"];
global.OwnerNumber = ["263716729222"];
global.ownertag = [""]; 
global.OwnerName =  "MidKingmdv1";
global.BotName = "🐦TariJoshuamambo";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Joshking ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/FCURRZJoRUd6Tuvf6DwUnZ "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/263716729222"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"4G/bFLdKqUHpHxxxTt4RnC7ow+i4MC5qLrunlm5UDUc="},"public":{"type":"Buffer","data":"yal8pmN2d7DaOwuMS0d0ACd2A6gpGeiN2+o/JWyCelc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OCbabkiP5fpR6wEdOf6I6UMu7CQmL4bMQafSrdDyoEE="},"public":{"type":"Buffer","data":"hNLXG+WoWATeWCLd7hihlZT08zOOyLu8G6pedGN+fU0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qOeB9xHogrKyJYUBUw4dyFLKbAA6Tknk1DHzFFPieFg="},"public":{"type":"Buffer","data":"tZQRDrc0iH+xhjdt3y8U+wVMP7VefnKqyIFvaOwRF0s="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yECq7SrnqRvXbJ9ek4UqNd52ToaJiGCImgXlxmSQAkc="},"public":{"type":"Buffer","data":"lA1jY25DEtvWX/l/2VECUJfoAgY/OtXxEvmhEEa3H2Y="}},"signature":{"type":"Buffer","data":"GobySutO0FeY0b9t/ps9AR9D2mr85ldBc47tYufBvjzjrqWjKYmIZyWxDz6JvLfwfGiaZn/HJpjBLIntLFYMCA=="},"keyId":1},"registrationId":29,"advSecretKey":"TSfUFvAykxV+drV2emlIlFKYw8GMbaT+FEZFHh4IgXs=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"F4lxAx8yTC-AZUwW4RTevA","phoneId":"cb6ef6c5-55a6-4c00-a314-5435a7837c52","identityId":{"type":"Buffer","data":"WOuBNMCpXlUxDmazuPWZINMSMEQ="},"registered":true,"backupToken":{"type":"Buffer","data":"34Xwtl9GEul7BdDGI+Y95Y/lLvA="},"registration":{},"pairingCode":"BPC5G7VY","me":{"id":"263716729222:46@s.whatsapp.net"},"account":{"details":"CN315uADEJnlyrUGGAsgACgA","accountSignatureKey":"vdvuCTRtrv0kz6VivPUlYdzZOR/BJWxL75xn1V9wxUQ=","accountSignature":"uiBzDnXYZ62ClgE8u6wrlz/1whF8wuSkZORVyym4fxVvpi9MUsMIgUPpEFC2spfMTmG78E2wm+dATe2QgvdmBA==","deviceSignature":"0P5J26fe5Chbd2Q1GycO7eqXfCfFvGtrMkJorVu/9ISFwur5jijmrIEmmoI/thhj78DkBokdhN6lLtFqZ33KAA=="},"signalIdentities":[{"identifier":{"name":"263716729222:46@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb3b7gk0ba79JM+lYrz1JWHc2TkfwSVsS++cZ9VfcMVE"}}],"platform":"android","lastAccountSyncTimestamp":1722987174,"myAppStateKeyId":"AAAAAHBg"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
