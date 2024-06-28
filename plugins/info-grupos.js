
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

m.react('✅')

    let don = `
🐈‍⬛ 𝗥 𝗘 𝗗 𝗘 𝗦  𝗚 𝗘 𝗡 𝗘 𝗦 𝗜 𝗦 🐈‍⬛

» 𝗖𝗔𝗡𝗔𝗟
${fgcanal}

» 𝗔𝗩𝗜𝗦𝗢𝗦
${bgp}

» 𝗚𝗟𝗢𝗕𝗔𝗟
${bgp2}

» 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 𝗫 𝗪𝗜𝗘𝗥 𝗕𝗢𝗧
https://chat.whatsapp.com/GO5l3kShGE30eV9dN82elb

> ${mssg.ig}
`
let img = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, fkontak, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'groups', 'support']

export default handler
