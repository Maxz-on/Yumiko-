import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('✅')
await m.reply('𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄 [✰]'.trim())
m.reply(`${sn}`.trim())
}
handler.help = ['mysn']
handler.tags = ['rpg']
handler.command = ['nserie', 'sn', 'myns'] 
handler.register = true

export default handler
