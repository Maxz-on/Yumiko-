
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ  𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  𝘽 𝙊 𝙏  ──◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*

🐈‍⬛ 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗲𝗻𝗲𝘀𝗶𝘀 𝗕𝗼𝘁 
🐈‍⬛ 𝗧𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼 𝗺𝗶 𝗺𝗲𝗻𝘂 𝗷𝘂𝗲𝗴𝗼𝘀

(Use estos comandos sin el prefijo: *${usedPrefix}*)

*╭──「 JUEGOS 🎮 」*
*┊ »*🐈‍⬛ _*.acertijo*_
*┊ »*🐈‍⬛ _*.dado*_
*┊ »*🐈‍⬛ _*.mates <modo>*_
*┊ »*🐈‍⬛ _*.ppt*_
*┊ »*🐈‍⬛ _*.slot <apuesta>*_
*┊ »*🐈‍⬛ _*.topgays*_
*┊ »*🐈‍⬛ _*.topotakus*_
*┊ »*🐈‍⬛ _*.toppotaxies*_
*┊ »*🐈‍⬛ _*.topintegrantes*_
*┊ »*🐈‍⬛ _*.topintegrante*_
*┊ »*🐈‍⬛ _*.toplagrasa*_
*┊ »*🐈‍⬛ _*.topgrasa*_
*┊ »*🐈‍⬛ _*.toppanafrescos*_
*┊ »*🐈‍⬛ _*.toppanafresco*_
*┊ »*🐈‍⬛ _*.topshiposters*_
*┊ »*🐈‍⬛ _*.topshipost*_
*┊ »*🐈‍⬛ _*.toppajer@s*_
*┊ »*🐈‍⬛ _*.toplindos*_
*┊ »*🐈‍⬛ _*.toplind@s*_
*┊ »*🐈‍⬛ _*.topput@s*_
*┊ »*🐈‍⬛ _*.topfamosos*_
*┊ »*🐈‍⬛ _*.topfamos@s*_
*┊ »*🐈‍⬛ _*.topparejas*_
*┊ »*🐈‍⬛ _*.top5parejas*_
*╰─────────────────┈°❀*
`
    let pp = './src/Menu.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menujuegos']
handler.tags = ['main']
handler.command = ['menujuegos', 'menugames'] 

export default handler