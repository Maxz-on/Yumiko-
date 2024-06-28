import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*PARA USAR GEMINI IA*\n_Ejemplo: .gemini que sos?_';
  m.react('🐈‍⬛') 
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = ['gemini']
handler.help = ['gemini']
handler.tags = ['ai']

handler.premium = false

export default handler
