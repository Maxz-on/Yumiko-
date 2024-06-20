
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
    conn.sendButton(m.chat, `, 'xdd', null, [['🌐 menucompleto', `.allmenu`], ['🧳 descargasmenu', `.descargasmenu`], ['👾 estado', `.estado`]], null, [['🎭 Grupo de WhatsApp', `https://chat.whatsapp.com/JuuuUaIQnnE3t4SWQenShg`]], m)
}
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['help', 'menu'] 

export default handler