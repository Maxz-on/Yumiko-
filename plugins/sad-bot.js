const handler = async (m, {conn, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A' || usedPrefix == '*' || usedPrefix == '#') return;
  if (!db.data.chats[m.chat].audios) return;
  if (!db.data.settings[conn.user.jid].audios_bot && !m.isGroup) return;
  //const s = seconds: '1934.4'
  const vn = './src/mp3/toma.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3`}, {quoted: m});
};
handler.command = /^(:c|c)$/i;
handler.fail = null;
handler.exp = 100;
export default handler;

