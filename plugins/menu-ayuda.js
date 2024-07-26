//código creado por Karim-off
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/cc25735df8aece16aa15b.png'
        m.react('🌸') 
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
🌸 `Ey hola soy Yumi <3` 🌸

🌸 `Soy un bot nuevo by Mxz` 🌸

🌸 `Sigueme en mi canal` 🌸
`
await conn.sendButton(m.chat, estado, '‎_BY: @mxz.18l_', pp, [
['📚 Menu 📚', '.allmenu'], ['🫅 Creador 🫅', '.owner']], null, [['🌸 Canal 🌸', `${fgcanal}`]], m)
}
handler.help = ['menu']
handler.tags = ['info']
handler.command = /^(menu?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}