
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

m.react('✅')

    let don = `
🐈‍⬛ 𝗥 𝗘 𝗗 𝗘 𝗦  𝗚 𝗘 𝗡 𝗘 𝗦 𝗜 𝗦 🐈‍⬛

*» Canal*
${fgcanal}

*» Grupo Avisos*
${bgp}

*» Grupo Global*
${bgp2}

*» Grupo Hot*
${bgp3}

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
