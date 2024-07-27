let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
try {
if (!m.quoted) return conn.reply(m.chat, `🌸 Responde a un mensaje para poder usar el comando coreectamente.🌸`, m, rcanal)
await conn.sendMessage(m.chat, { forward: m.quoted.fakeObj }, { quoted: m })
} catch {
await m.react('✖️')
}}
handler.help = ['reenviar']
handler.tags = ['tools']
handler.command = ['reenviar']

export default handler