var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `${await groupMetadata.id}`, m)

}
handler.help = ['idgc']
handler.tags = ['grupo']
handler.command = /^(cekid|idgp|gcid)$/i

handler.group = true

export default handler