function handler(m, { text }) {
if (!text) return conn.reply(m.chat, '🌸 Ingresa tu nombre junto al comando.🌸', m, rcanal)
conn.reply(m.chat, '⁖🧡꙰  Buscando El Nombre....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: packname,
previewType: 0, thumbnail: fgcanal,
sourceUrl: fgcanal }}})
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
m.reply(teks.replace(/[a-z]/gi, v => {
return {
'a': '.-',
'b': '-...',
'c': '-.-.',
'd': '-..',
'e': '.',
'f': '..-.',
'g': '--.',
'h': '....',
'i': '..',
'j': '.---',
'k': '-.-',
'l': '.-..',
'm': '--',
'n': '-.',
'ñ': '--.--',
'o': '---',
'p': '.--.',
'q': '--.-',
'r': '.-.',
's': '...',
't': '-',
'u': '..-',
'v': '...-',
'w': '.--',
'x': '-..-',
'y': '-.--',
'z': '--..'
}[v.toLowerCase()] || v }))}

handler.help = ['morce *<texto>*']
handler.tags = ['herramientas']
handler.command = ['morce']
handler.register = true

export default handler