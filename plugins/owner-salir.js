const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*𝖠𝖽𝗂𝗈𝗌 𝖺 𝗍𝗈𝖽𝗈𝗌 🍒, 𝖿𝗎𝖾 𝗎𝗇 𝗀𝗎𝗌𝗍𝗈 𝗌𝖾𝗋𝗏𝗂𝗋𝗅𝖾𝗌. GenesisBot 𝗌𝖾 𝖽𝖾𝗌𝗉𝗂𝖽𝖾. 🌿*');
  await conn.groupLeave(id);
};
handler.command = /^(out|salir)$/i;
handler.group = true;
handler.rowner = true;
export default handler;