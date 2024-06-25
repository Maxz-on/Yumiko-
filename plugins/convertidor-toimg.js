import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `ðŸš© Responde a un *Sticker.*`
if (!m.quoted) return conn.reply(m.chat, notStickerMessage, m, rcanal)
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) return conn.reply(m.chat, notStickerMessage, m, rcanal)
await m.react('ðŸ•“')
try {
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'thumbnail.jpg', listo, m)
await m.react('âœ…')
} catch {
await m.react('âœ–ï¸')
}}
handler.help = ['toimg *<sticker>*']
handler.tags = ['convertidor']
handler.command = ['toimg', 'jpg', 'aimg'] 
handler.register = true

export default handler