 case 'menu': case 'help': {
conn.sendButton(m.chat, `╦══════════════════ ⪨
┃│✾ ⋟ *${ucapan()}*
┃│✾ ⋟ *tenemos varios tipos de menus*
┃│✾ ⋟ 1
┃│✾ ⋟ *#menucompleto*
┃│✾ ⋟ 2
┃│✾ ⋟ *#descargasmenu*
┃│✾ ⋟ *ejemplo:*
┃│✾ ⋟ *#menucompleto*
┃╰══ ⪨`, 'xdd', null, [['🌐 menucompleto', `.allmenu`], ['🧳 descargasmenu', `.descargasmenu`], ['👾 estado', `.estado`]], null, [['🎭 Grupo de WhatsApp', `https://chat.whatsapp.com/JuuuUaIQnnE3t4SWQenShg`]], m)
}
break