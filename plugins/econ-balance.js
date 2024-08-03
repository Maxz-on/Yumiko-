
let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `${mssg.userDb} [✰]`
    conn.reply(m.chat, `
  @${who.split('@')[0]} [✰]
  𝐂𝐀𝐑𝐓𝐄𝐑𝐀 シ︎

𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒: ${user.diamond.toLocaleString()} [✰]
𝐂𝐎𝐈𝐍𝐒: ${user.coin.toLocaleString()} [✰]
`, m, { mentions: [who] })
}

handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'monedero', 'billetera', 'balance'] 

export default handler
