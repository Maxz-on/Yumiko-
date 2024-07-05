import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ARIL MD\nNICKNAME:👑 Owner ARIL MD\nORG:ARIL MD\nTITLE:soft\nitem1.TEL;waid=59897246324:+598 97 246 324\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/karim-off/GenesisBot-Pro1\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: agasistencia2@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇺🇾 Uruguay;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐈‍⬛ 09-12-2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: packname, contacts: [{ vcard }] }}, { quoted: global.m })
let caption = `👋 Hai *${edtr}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

export default handler