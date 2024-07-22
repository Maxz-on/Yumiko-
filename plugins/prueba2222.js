let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `🌸 *Que Nombre Deseas Ponerme?* 🌸`, m, rcanal)
  try {
    await conn.updateProfileName(text)
    return conn.reply(m.chat, '✅️ *Nombre Cambiado Con Éxito*', m, rcanal)
  } catch (e) {
    console.log(e)
    throw `🌸 Ocurrió Un Error¡! 🌸`
  }
}
handler.help = ['nuevonombre <teks>']
handler.tags = ['owner']
handler.command = /^(nuevonombre|nuevonombrebot|cambianombre)$/i

handler.owner = true
export default handler