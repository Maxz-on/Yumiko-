import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['59168683798', 'CREADOR 🍒', true],
  ['59168683798']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['59168683798', '59176181985']
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
global.packname = '𝙂𝙚𝙣𝙚𝙨𝙞𝙨 𝙋𝙧𝙤𝙛𝙚𝙨𝙨𝙞𝙤𝙣𝙖𝙡' 
global.author = '@usxr_angelito' 

//--info FG
global.botName = 'Genesis'
global.fgig = 'https://instagram.com/usxr_angelito' 
global.fgsc = 'https://github.com/karim-off/GenesisBot-Pro' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
global.bgp = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6'
global.bgp2 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O'
global.bgp3 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O' //--GP NSFW

global.wait = '🍒 Cargando....'
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
