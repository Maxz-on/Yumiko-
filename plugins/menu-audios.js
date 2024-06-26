
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┌─⊷ *AUDIOS* 
𝘢𝘳𝘢
𝘧𝘪𝘯𝘰 𝘴𝘦ñ𝘰𝘳𝘦𝘴
𝘣𝘢ñ𝘢𝘵𝘦
𝘣𝘶𝘦𝘯𝘰𝘴 𝘥𝘪𝘢𝘴
𝘥𝘪𝘢𝘨𝘯ó𝘴𝘵𝘪𝘤𝘰
𝘦𝘭𝘮𝘰
𝘱𝘶𝘵𝘰
𝘨𝘦𝘮𝘪𝘥𝘰
𝘱𝘰𝘣𝘳𝘦 𝘱𝘦𝘳𝘳𝘢
𝘮𝘢𝘯𝘤𝘰
𝘮𝘪𝘢𝘶
𝘵𝘳𝘢𝘬𝘢
𝘵𝘶𝘳𝘪𝘱
𝘩𝘪𝘮𝘯𝘰 𝘱𝘰𝘵𝘢𝘹𝘪𝘦
𝘢
:𝘤
└──────────────
`
    let pp = './src/Menu.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menuaudios', 'audios'] 

export default handler
