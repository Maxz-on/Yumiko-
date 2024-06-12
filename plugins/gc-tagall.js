const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `📧 𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${pesan}\n🍪 𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨: _*${participants.length}*_`;
  let teks = `☕ ＲＥＶＩＶＡＮ ＰＬＡＮＴＡＳ\n\n ${oi}\n\n┏・☕ 𝙧𝙚𝙫𝙞𝙫𝙖𝙣 𝙛𝙚@𝙨 !\n`;
  for (const mem of participants) {
    teks += `┣・☕ @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・☕ 𝙂𝙚𝙣𝙚𝙨𝙞𝙨-𝘽𝙤𝙩-𝙋𝙧𝙤`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;