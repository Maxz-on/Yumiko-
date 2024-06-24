    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    let pp = 'https://telegra.ph/file/4c3e4b782c82511b3874d.mp4'
    let pp2 = 'https://telegra.ph/file/d8c5e18ab0cfc10511f63.mp4'
    let pp3 = 'https://telegra.ph/file/96e471a87971e2fb4955f.mp4'
    let pp4 = 'https://telegra.ph/file/09b920486c3c291f5a9e6.mp4'
    m.react('💻')

  //  conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: m })
let ...listSections = []    
listSections.push({
title: '',
rows: [{ header: "Menu Completo", title: "", id: `.allmenu`, description: `Para ver todos los comandos\n` }, { header: "SudBot", title: "", id: `.serbot --code`, description: `Para volverte sudbot con código de 8 dígitos 🤖\n` },
{ header: "Velocidad", title: "", id: `.ping`, description: `Ver velocidad del bot 🎌\n` },
{ header: "Idioma", title: "", id: `.idioma`, description: `elije tu idioma favorito  🌍\n` },
{ header: "creador", title: "", id: `.creador`, description: `comunicate con mi creador ⚙️` }
]})
await conn.sendList(m.chat, '👋🏻 Hola¡! Bienvenido A Mi Sub Menú\n\n*Creador:* Daniel\n*Versión:* 1.0.0\n\n💮 si hay algún error puedes contactarme, usa el comando: #owner\n\nGracias¡! 🔴', null, `Clik`, listSections, { mentions: [m.sender]}, {quoted: m})
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}