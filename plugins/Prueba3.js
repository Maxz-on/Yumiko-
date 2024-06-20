
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
> » Hola! Soy *GenesisBot ☕*
> » Bot en desarrollo 🧑🏻‍💻
> » Creador: Angelito
> » Sígueme en mi Canal 🍫
`
    let pp = './src/Menu2.png' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['help', 'menu'] 

export default handler