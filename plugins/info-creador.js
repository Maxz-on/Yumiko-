let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('🌸')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:MAXZ 🌸\nFN:MAXZ 🌸\nORG:MAXZ 🌸\nTITLE:\nitem1.TEL;waid=59897246324:59897246324\nitem1.X-ABLabel:MAXZ 🌸\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:MAXZ 🌸\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'MAXZ 🌸', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler