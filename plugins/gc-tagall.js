const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('✅') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*» INFO :* ${pesan}`;
  let teks = `*!  MENCION GENERAL  !*\n  *PARA ${participants.length} MIEMBROS* 🗣️\n\n ${oi}\n\n╭┈┈✣ 𝙂𝙚𝙣𝙚𝙨𝙞𝙨 𝙋𝙧𝙤 ✣\n`;
  for (const mem of participants) {
    teks += `┊» 🐈‍⬛ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰┈✣ 𝙂𝙚𝙣𝙚𝙨𝙞𝙨 𝙋𝙧𝙤𝙛𝙚𝙨𝙨𝙞𝙤𝙣𝙖𝙡`;
  conn.sendMessage(m.chat, fkontak, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;