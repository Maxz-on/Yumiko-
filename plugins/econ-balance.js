
let handler = async (m, {conn, usedPrefix}) => {
let pp = './src/Banco.jpg' 
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
    conn.reply(m.chat, `🏦 *B A N C O  D E L  B O T*\n\n
 🍒 *CLIENTE:* @${who.split('@')[0]}

 💰 *C U E N T A*

*💎 DIAMANTES:* _${user.diamond.toLocaleString()}_
*🍒 GENECOINS:* _${user.coin.toLocaleString()}_
*📄 REGISTRADO :* ${user.registered ? 'Si':'No'}
`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'monedero', 'billetera', 'balance'] 

export default handler
