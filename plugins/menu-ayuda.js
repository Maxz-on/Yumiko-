//código creado por Karim-off
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/50fd9ea68114f67f4d4c2.jpg'
	m.react('🌸') 
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
🌸─►𝘏𝘰𝘭𝘢! 𝘴𝘰𝘺 *Yumiko Bot𝘵*
🌸─►𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰
🌸─►𝘚𝘪𝘨𝘶𝘦𝘮𝘦 𝘦𝘯 𝘮𝘪 𝘤𝘢𝘯𝘢𝘭
`
await conn.sendButton(m.chat, estado, '‎_BY: @max_xitado.pe_', pp, [
['📚 Menu 📚', '.allmenu'], ['🫅 Creador 🫅', '.owner']], null, [['🌸 Canal 🌸', `${fgcanal}`]], m)
}
handler.help = ['help']
handler.tags = ['info']
handler.command = /^(help?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}