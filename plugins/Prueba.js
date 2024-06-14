
let handler = async(m, { conn, usedPrefix, command }) => {

        m.react('📚') 

    let don = `
> *Título:* 
> *Duración:*
`
let img = './src/Menu.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'ayuda'] 

export default handler




let handler = async function (m, { conn, text, usedPrefix }) {

        m.react('📚') 
  let m2 = `
> *Título:* 
> *Duración:*`

let pp = '' 

handler.help = ['help']
handler.tags = ['dl']
handler.command = ['menu', 'help']
handler.disabled = false

export default handler