/* Copyright (C) 2020 farhan-dqz.
julie 
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['Hi','Hlo','Aarulle','Ayn','Block','Bott chathu','Dii','Dora','Fan','Fayas','Food','Good night','Group active','Happy','I hate you','I love you','Ijjathi','Insult','Ivan','Kannappi','Kollam','Kollatte','Kozhi','Kunna','Manassilayo','Miss you','Mm','Mng','Nee','Ok da','Patti','Poli','Pottan','Pova','Povalle','Rip','Sarasu','Sed','Seen','Sorry','Start','Sticker','Time','Unda','Undakanni','Va','Vada','Vaza','Veno','Vilikk','Wow','baby','broken','mathiyo','poda','saralla','Liza','Poda','Da','alive','help','Jocker','ayn','patti','poli','Adi','Age','Air','Album song','Album','Audio','Bgm','Breakup','Hacker','Janu','Koye','Life','Line','status','Marannu','Mole','Noob','Pavam','Podi','Sed akki','Sed song','Senti','Thair','Umma','Venda','Voice','What','age','air','audio','bgm','breakup','dii','i love you','janu','kannappi','kazichilla','kollam','life','line','love status','marannu','miss you','mole','noob','podi','rip','sarasu','sed akki','sed song','senti','sorry','thair','umma','vaza','venda','vilikk','voice','what','Aara','Andi','Business','Chaya','Dude','Chathu','Happy Birthday','Home','Kollum','Mandan','Name','Nee etha','Nikk','Njan vannu','Parayatte','Poyo','Sry','Troll','Uff','Verupikkalle','aara','andi','business','chaya','group chathu','kollum','mandan','nee etha','nikk','njan vannu','parayatte','poyo','sry','troll','uff','verupikkalle','Aliya','Friend','Mass','Naayi','Njan','Vazha','Verupikal','aliya','friend','mass','njan','pova','vazha','verupikal','Baby','Jerry','Love','Nithin','Myr']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('20210811_082543.jpg')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Hi','Fek','Ariyo','Ayn','Aysheri','Ayye','Baby','Bot','Chill','Da','Delete','Enth','Eppadi','Ethi','Happy','Hehe','Hello','Help','Hlo','How','Kali','Kd','King','Kollum','Kopp','Kundan','Life','Line','Love','Lover','Muthe','Myr','Nallath','Nice','Orakkam','Paatt','Para','Poda','Povoola','Pro','Pwoli','Remove','Sad','Scene','Sed','Sheri','Sherikkum','Single','Thanne','Thund','Vaa','Vanno','Vannu','Vere bot','Wait','Why','ariyo','ayn','aysheri','ayye','baby','chill','da','delete','enth','eppadi','ethi','happy','hehe','hello','help','hlo','how','kali','kd','king','kollum','kopp','kundan','leave','life','line','love','mrng','muthe','myr','nallath','nice','njan','orakkam','paatt','para','poda','podo','povoola','pro','pwoli','remove','sad','scene','sed','sheri','sherikkum','single','tagall','thanne','thund','vaa','vanno','vannu','vere bot','wait','why','Pinky','hi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: true },quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Alone','Ariyo','Ayin','Bie','Bomb','Bot','Bote','Cute','Hate','Hi','Hoi','Lub','Myr','Myre','Oh','Poda','Police','Poocha','Sed','Work','Wow','Z','aara','aayo','air','alla','alone','anthas','ariyo','ayin','aysheri','bie','bye','charge','chathu','cheyalle','chunk','colony','committed','cute','dance','dead','eda','eh','entha','exam','fan','fans','girl','girls','give','hate','hi','hlo','hoi','important','indo','killadi','kozhi','kunna','kutti','list','love','madthu','mama','marichu','mention','mood','morning','muthe','myr','myre','nee alle','njan','number','oh','ok','oombi','ooo','pedicho','pever','pidi','pm','powersh','powli','poyi','remove','sad','saved','scene','search','sed','shaad','sheri','shut','sry','teach','test','thech','think','thund','uff','umma','uyir','vada','vannu','vibe','work','wow','z']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

