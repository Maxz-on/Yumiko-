var handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, '𝐄𝐒𝐂𝐑𝐈𝐁𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐃𝐎𝐒 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐏𝐀𝐑𝐀 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐑 𝐒𝐔 𝐀𝐌𝐎𝐑 [✰]', m, rcanal, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, ` 𝐄𝐒𝐂𝐑𝐈𝐁𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐋𝐀 𝐒𝐔𝐆𝐔𝐍𝐃𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 [✰]`, m, rcanal, )
let love = `❤️ *${text1}* 𝐓𝐔 𝐎𝐏𝐎𝐑𝐓𝐔𝐍𝐈𝐃𝐀𝐃 𝐃𝐄 𝐄𝐍𝐀𝐌𝐎𝐑𝐀𝐑𝐓𝐄 𝐃𝐄 *${text2}* 𝐄𝐒 𝐃𝐄 ${Math.floor(Math.random() * 100)}% 👩🏻‍❤️‍👨🏻`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship', 'love']
handler.tags = ['fun']
handler.command = /^(ship|love)$/i

handler.register = true

export default handler