
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

    let don = `

» 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/59897246324

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
https://www.instagram.com/usxr_angelito


`
let img = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, fkontak, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['redes']
handler.tags = ['info']
handler.command = ['redes'] 

export default handler