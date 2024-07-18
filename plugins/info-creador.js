let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('🌸')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Mxz \nFN:ꪑ᥊ɀ 🥷 \nORG:ꪑ᥊ɀ 🥷 \nTITLE:\nitem1.TEL;waid=5493536568522:5493536568522\nitem1.X-ABLabel:ꪑ᥊ɀ 🥷 \nX-WA-BIZ-DESCRIPTION: . \nX-WA-BIZ-NAME:ꪑ᥊ɀ 🥷 \nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Mxz ', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler