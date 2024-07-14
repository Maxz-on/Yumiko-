
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   await conn.reply(m.chat, '🌸 ¿Por qué no vas directamente a la terminal? 🌸', m);
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ ${mssg.stopbot}`, m);
    conn.ws.close();
  }
};
handler.help = ['stop']
handler.tags = ['bebot']
handler.command = ['stop', 'stopbot', 'stopbebot']
handler.owner = true

export default handler
