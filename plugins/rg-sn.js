import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
await m.reply(`» *NÚMERO DE SERIE 🍒*`.trim())
m.reply(`${sn}`.trim())
}
handler.help = ['mysn']
handler.tags = ['rg']
handler.command = ['nserie', 'sn', 'myns'] 
handler.register = true

export default handler