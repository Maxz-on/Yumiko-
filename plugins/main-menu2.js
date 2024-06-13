
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
▢ Fino señores
▢ Sad
└──────────────
`
    let pp = './src/Menu.jpg' 

 await conn.sendButton2(m.chat, m2, mssg.ig, thumbnail, [
    ['📚 MENU 📚', `${usedPrefix}allmenu`],
  ], null, [['🍒 Canal', `${fgcanal}`]], m)
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
