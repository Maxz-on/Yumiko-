
let handler = async(m, { conn, usedPrefix, command }) => {

        m.react('📚') 

    let don = `
> *Título:* 
> *Duración:*
`
let img = './src/Menu.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
 await conn.sendButton2(m.chat, m2, pp, [
    ['📚 MENU 📚', `${usedPrefix}allmenu`],
    ['🫅 OWNER 🫅', `${usedPrefix}owner`]
  ], null, [['🍒 Canal', `${fgcanal}`]], m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'ayuda'] 

export default handler