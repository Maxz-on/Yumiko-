let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('🫅')

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢᴇɴᴇꜱɪꜱ ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ \nᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:ANGELITO 🍒\nFN:ANGELITO 🍒\nORG:ANGELITO 🍒\nTITLE:\nitem1.TEL;waid=59897246324:59897246324\nitem1.X-ABLabel:Angelito 🍒\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:ANGELITO 🍒\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ANGELITO 🍒', contacts: [{ vcard }] }}, {quoted: fcontact})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler