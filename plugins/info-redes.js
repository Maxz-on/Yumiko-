
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

    let don = `
🌸 *REDES OWNER* 🌸

🌸 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘𝗟 𝗕𝗢𝗧 🌸
 wa.me/5493536568522

🌸 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 🌸
 https://www.instagram.com/maxz.18l

🌸 𝗚𝗜𝗧 𝗛𝗨𝗕 🌸
https://github.com/Maxz-on/Yumiko-.git

> ${mssg.ig}
`
let img = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, fkontak, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['redes']
handler.tags = ['info']
handler.command = ['redes'] 

export default handler