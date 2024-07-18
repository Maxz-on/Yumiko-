
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/20b04f440534d860564c2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
 🌸 𝘊𝘙𝘌𝘈𝘋𝘖𝘙 🌸
• Maxz

 🌸 𝘈𝘊𝘛𝘐𝘝𝘐𝘋𝘈𝘋 🌸
• ${uptime}

 🌸 𝘉𝘖𝘛 🌸
• Yumiko Bot

 🌸 𝘋𝘖𝘕𝘈𝘙 🌸
• Puedes apoyar el bot dando tu estrellita en nuestro repositorio

 🌸 𝘙𝘌𝘗𝘖𝘚𝘐𝘛𝘖𝘙𝘐𝘖 🌸
• https://github.com/Maxz-on/Yumiko-.git


`
await conn.sendButton(m.chat, estado, <' By: Mxz', pp, [
['🤴 DUEÑO 🤴', '.owner'], ['🫀GRUPOS 🫀', '/grupos']], null, [['🌸 CANAL 🌸', `${fgcanal}`]], m)
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^(apoyar|donate|donar?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

