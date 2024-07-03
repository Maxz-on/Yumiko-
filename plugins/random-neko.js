import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${errorBB}`
conn.sendButton(m.chat, `${command}`, packname, json.url, [['🐈‍⬛ SIGUIENTE 🐈‍⬛', `/${command}`]], null, null, m)
}
handler.help = ['neko']
handler.tags = ['random']
handler.command = /^(neko)$/i
export default handler