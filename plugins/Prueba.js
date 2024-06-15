let uwu = `╦══════════════════ ⪨
┃│✾ ⋟ *${ucapan()}*
┃│✾ ⋟ *tenemos varios tipos de menus*
┃│✾ ⋟ 1
┃│✾ ⋟ *#menucompleto*
┃│✾ ⋟ 2
┃│✾ ⋟ *#descargasmenu*
┃│✾ ⋟ *ejemplo:*
┃│✾ ⋟ *#menucompleto*
┃╰══ ⪨`
conn.sendButton(m.chat, uwu, null, imagen1, [
['🌐 menucompleto', '.allmenu'],
['🧳 descargasmenu', '.descargasmenu'],
['👾 estado', '/estado']], null, 
[['🎭 Grupo de WhatsApp', md]], m)}