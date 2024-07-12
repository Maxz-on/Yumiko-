const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '🌸 *𝖠𝖽𝗂𝗈𝗌 𝖺 𝗍𝗈𝖽𝗈𝗌* 🌸');
  await conn.groupLeave(id);
};
handler.help = ['salir']
handler.tags = ['owner']
handler.command = /^(out|salir)$/i;
handler.group = true;
handler.rowner = true;
export default handler;