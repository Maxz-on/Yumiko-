
let handler = async function (m, { conn, text, usedPrefix }) {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
let m2 = `
🏦 *B A N C O  D E L  B O T*\n\n
 🍒 *CLIENTE:* @${who.split('@')[0]}

 💰 *C U E N T A*

*💎 DIAMANTES:* _${user.diamond.toLocaleString()}_
*🍒 GENECOINS:* _${user.coin.toLocaleString()}_
*📄 REGISTRADO :* ${user.registered ? 'Si':'No'}
`
    let pp = './src/Banco.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['bank']
handler.tags = ['herramientas']
handler.command = ['bank', 'banco'] 

export default handler