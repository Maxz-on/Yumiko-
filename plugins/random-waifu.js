import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${errorBB}`
conn.sendButton(m.chat, `${command}`, packname, json.url, [['🐈‍⬛ SIGUIENTE 🐈‍⬛', `/${command}`]], null, null, m)
}
handler.help = ['waifu2']
handler.tags = ['random']
handler.command = /^(waifu2)$/i
export default handler