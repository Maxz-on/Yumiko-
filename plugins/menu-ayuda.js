//código creado por Karim-off
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/fe190c9ca575ab19161e9.jpg'
        m.react('🌸') 
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓  🌸

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐍𝐒𝐖𝐅
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮

🌸 𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰 🌸

🌸 𝘚𝘪𝘨𝘶𝘦𝘮𝘦 𝘦𝘯 𝘮𝘪 𝘤𝘢𝘯𝘢𝘭 🌸
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
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