const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('🌸') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = ` 𝐀𝐇: ${pesan}\n 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒: _*${participants.length}*_
`;
  let teks = `
 𝐋𝐋𝐀𝐌𝐀𝐍𝐃𝐎 メ 𝐆𝐑𝐔𝐏𝐎 シ︎ \n${oi}\n\n\n`;
  for (const mem of participants) {
    teks += ` @${mem.id.split('@')[0]}\n`;

  }
  teks += ``;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|Mxz)$/i;
handler.admin = true;
handler.group = true;
export default handler;