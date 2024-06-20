
let handler = async function (m, { conn, text, usedPrefix }) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let m2 = `
> » Hola! Soy *GenesisBot ☕*
> » Bot en desarrollo 🧑🏻‍💻
> » Creador: Angelito
> » Sígueme en mi Canal 🍫
`
    let pp = './src/Menu2.png' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal, fkontak)

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['help', 'menu'] 

export default handler