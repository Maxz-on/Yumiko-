import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*INGRESA EL ENLACE*\n_.ig <link>_')
try {
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `🐈‍⬛ *Su Video De Instagram*\n${botname}` }, { quoted: fkontak})
} catch (e) {
  console.log(e)
  m.reply('🐈‍⬛ Ocurrió un error inesperado.')
}}

handler.help = ['ig <enlace>']
handler.tags = ['dl']
handler.command = ['ig', 'instagram']
handler.register = true
handler.limit = 1

export default handler