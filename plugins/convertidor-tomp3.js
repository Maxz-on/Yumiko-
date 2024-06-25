import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return conn.reply(m.chat, `ðŸš© Responde al *Video* o *Nota de Voz* que desea convertir a mp3.`, m, rcanal)
await m.react('✅')
try {
let media = await q.download?.()
if (!media) return await m.react('✅')
let audio = await toAudio(media, 'mp4')
if (!audio.data) return await m.react('✅')
await conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
await m.react('✅')
} catch {
await m.react('✅')
}}
handler.help = ['tomp3']
handler.tags = ['convertir']
handler.command = ['tomp3', 'toaudio', 'mp3'] 
handler.register = true

export default handler