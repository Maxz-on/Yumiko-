let handler = async (m, { groupMetadata }) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   let nro = (100).getRandom()
   await m.reply(`@${who.split("@")[0]} 𝐄𝐒𝐓𝐀 ${nro}% 𝐇𝐎𝐑𝐍𝐘 🥵.`, null, { mentions: [who] })
}

handler.help = ['horny']
handler.tags = ['fun']
handler.command = ['cekhorny', 'horny']

handler.group = true

export default handler