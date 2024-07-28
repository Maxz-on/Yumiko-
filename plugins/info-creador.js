let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('🌸')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Ethx \nFN:Ethx 🥷 \nORG:Ethx 🥷 \nTITLE:\nitem1.TEL;waid=573150310929:573150310929\nitem1.X-ABLabel:Ethx🥷 \nX-WA-BIZ-DESCRIPTION: 𝘚𝘰𝘭𝘰 𝘤𝘰𝘴𝘢𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵. \nX-WA-BIZ-NAME:Ethx 🥷 \nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Ethx ', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler