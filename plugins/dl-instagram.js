import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🌸 *YUMIKO BOT* 🌸\n\n*INGRESA EL ENLACE*\n_.ig <link>_', m, rcanal)
await m.react('🕓')
try {
let { dl_url } = await Starlights.igdl(args[0])
await conn.sendFile(m.chat, dl_url, 'igdl.mp4', listo, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['instagram *<link ig>*']
handler.tags = ['dl']
handler.command = /^(instagramdl|instagram|igdl|ig)$/i
//handler.limit = 1
handler.register = true 
export default handler