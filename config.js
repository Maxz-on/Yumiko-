import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['5493536568522', '𝐂𝐑𝐄𝐀𝐃𝐎𝐑 ', true],
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5493536568522', '59176181985']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝐘𝐔𝐌𝐈𝐊𝐎' 
global.author = '@𝐌𝐱𝐳.18𝐥' 
global.descripcion = '𝐒𝐨𝐥𝐨 𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚𝐬 𝐝𝐞𝐥 𝐛𝐨𝐭'

//--info FG
global.botName = '𝐘𝐔𝐌𝐈𝐊𝐎'
global.fgig = '𝐒𝐨𝐥𝐨 𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚𝐬 𝐝𝐞𝐥 𝐛𝐨𝐭' 
global.fgigt = 'https://instagram.com/Mxz.18.l' 
global.fgsc = 'https://github.com/Maxz-on/Yumiko-.git' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.id_canal = '120363302454592275@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VafBXQtDDmFbtwvkt20J'
global.bgp = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6'
global.bgp2 = 'https://chat.whatsapp.com/EVl0wxlCww74HV3vvZq83a'
global.bgp3 = 'https://chat.whatsapp.com/Fn5Ipyxu6mE6qEQlwWZTwU' //--GP NSFW

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************

global.wait = '🌸 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
