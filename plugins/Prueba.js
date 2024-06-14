let handler = async function (m, { conn, text, usedPrefix }) {

        let pp = './src/Menu.jpg' 
        m.react('📚') 
  let m2 = `
> *Título:* 
> *Duración:*`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['📚 MENU 📚', `${usedPrefix}fgmp3 ${url}`],
    ['🫅 OWNER 🫅', `${usedPrefix}fgmp4 ${url`]
  ], null, [['🍒 Canal', `${fgcanal}`]], m)
}
handler.help = ['help']
handler.tags = ['dl']
handler.command = ['menu', 'help']
handler.disabled = false

export default handler