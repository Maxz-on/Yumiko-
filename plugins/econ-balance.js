
let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `🌸 ${mssg.userDb} 🌸`
    conn.reply(m.chat, `
 🌸 *CLIENTE:* @${who.split('@')[0]}
 💰 *C A R T E R A*

*💎 DIAMANTES:* _${user.diamond.toLocaleString()}_
*🌸 COINS:* _${user.coin.toLocaleString()}_
`, m, { mentions: [who] })
}

handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'monedero', 'billetera', 'balance'] 

export default handler
