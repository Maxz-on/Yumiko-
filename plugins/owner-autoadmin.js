let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*🌸 Ya es admin mi maxzito* 🌸`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.tags = ['owner']
handler.command = /^dameadmin|tenerpoder$/i
handler.rowner = true
handler.botAdmin = true
export default handler