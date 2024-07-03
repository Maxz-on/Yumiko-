import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${errorBB}`
conn.sendButton(m.chat, `${command}`, packname, json.url, [['🐈‍⬛ SIGUIENTE 🐈‍⬛', `/${command}`]], null, null, m)
}
handler.help = ['waifu']
handler.tags = ['random']
handler.command = /^(waifu)$/i
export default handler