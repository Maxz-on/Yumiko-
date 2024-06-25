import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
let limit = 300

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!args || !args[0]) return star.reply(m.chat, 'ðŸš© Ingresa el enlace del vÃ­deo de YouTube junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, `Verifica que el enlace sea de YouTube.`, m, rcanal).then(_ => m.react('✅'))
let q = args[1] || '360p'

await m.react('✅')
try {
let v = args[0]
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await yt.video[q].download()
let title = await yt.title
let size = await yt.video[q].fileSizeH 
let thumbnail = await yt.thumbnail

let img = await (await fetch(`${thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
if (size.split('GB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
        let txt = '`M P 4 - D O C`\n\n'
       txt += `*Titulo* : ${title}\n`
       txt += `*Calidad* : ${q}\n`
       txt += `*Tamaño* : ${size}\n\n`
       txt += `> *El video se esta enviando espera un momento*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, fkontak)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react('✅')
} catch {
try {
let yt = await fg.ytv(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let img = await (await fetch(`${vid.thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
if (size.split('GB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
        let txt = '`M P 4 - D O C`\n\n'
       txt += `*Titulo* : ${title}\n`
       txt += `*Calidad* : ${q}\n`
       txt += `*Tamaño* : ${size}\n\n`
       txt += `> *El video se esta enviando espera un momento*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, fkontak)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, dl_url, thumb } = yt

let img = await (await fetch(`${thumb}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
if (size.split('GB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
        let txt = '`M P 4 - D O C`\n\n'
       txt += `*Titulo* : ${title}\n`
       txt += `*Calidad* : ${q}\n`
       txt += `*Tamaño* : ${size}\n\n`
       txt += `> *El video se esta enviando espera un momento*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react('✅')
} catch {
await m.react('✅')
}}}}
handler.help = ['ytmp4doc *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp4doc', 'ytvdoc', 'ytdoc']
//handler.limit = 1
handler.register = true 

export default handler