let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('🐈‍⬛')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:ANGELITO 🐈‍⬛\nFN:ANGELITO 🐈‍⬛\nORG:ANGELITO 🐈‍⬛\nTITLE:\nitem1.TEL;waid=59897246324:59897246324\nitem1.X-ABLabel:Angelito 🐈‍⬛\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:ANGELITO 🐈‍⬛\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ANGELITO 🐈‍⬛', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner3', 'creator', 'creador', 'dueño'] 

export default handler

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ARIL MD\nNICKNAME:👑 Owner ARIL MD\nORG:ARIL MD\nTITLE:soft\nitem1.TEL;waid=6282220427314:+62 822-2042-7314\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://github.com/Aril-MD/ElainaMultiDevice\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:arilmd368@gmail.com\nitem3.X-ABLabel:💌 Mail Owner ARIL MD\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 12-04-2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *${edtr}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler