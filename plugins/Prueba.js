
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
╦══════════════════ ⪨
┃│✾ ⋟ *${ucapan()}*
┃│✾ ⋟ *tenemos varios tipos de menus*
┃│✾ ⋟ 1
┃│✾ ⋟ *#menucompleto*
┃│✾ ⋟ 2
┃│✾ ⋟ *#descargasmenu*
┃│✾ ⋟ *ejemplo:*
┃│✾ ⋟ *#menucompleto*
┃╰══ ⪨
`
    let pp = './src/Menu.jpg' 
conn.sendButton(m.chat, m2, null, imagen1, [
['🌐 menucompleto', '.allmenu'],
['🧳 descargasmenu', '.descargasmenu'],
['👾 estado', '/estado']], null, 
[['🎭 Grupo de WhatsApp', md]], m)}

}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help'] 

export default handler




let uwu = ``
