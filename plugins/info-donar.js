
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

    let don = `
🐈‍⬛ 𝗗 𝗢 𝗡 𝗔 𝗥  𝗚 𝗘 𝗡 𝗘 𝗦 𝗜 𝗦 🐈‍⬛

» 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘𝗟 𝗕𝗢𝗧
🐈‍⬛ wa.me/59897246324

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_

» 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢
🐈‍⬛ https://github.com/Karim-off/GenesisBot-Pro


> ${mssg.ig}
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, fkontak, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['info']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

