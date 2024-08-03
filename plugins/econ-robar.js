const ro = 30;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `𝐄𝐒𝐏𝐄𝐑𝐀 ${msToTime(time - new Date())} 𝐏𝐀𝐑𝐀 𝐕𝐎𝐋𝐕𝐄𝐑 𝐀 𝐑𝐎𝐁𝐀𝐑 [✰]`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐀 𝐀𝐋𝐆𝐔𝐈𝐄𝐍 𝐏𝐀𝐑𝐀 𝐑𝐎𝐁𝐀𝐑 [✰]`;
  if (!(who in global.db.data.users)) throw `𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐍𝐎 𝐒𝐄 𝐄𝐍𝐂𝐔𝐄𝐁𝐓𝐑𝐀 𝐄𝐍 𝐌𝐈 𝐁𝐀𝐒𝐄 𝐃𝐄 𝐃𝐀𝐓𝐎𝐒 [✰]`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.coin < rob) return m.reply(`😔 @${who.split`@`[0]} 𝐓𝐈𝐄𝐍𝐄 𝐌𝐄𝐍𝐎𝐒 𝐃𝐄 ${ro} xp*\n𝐍𝐎 𝐑𝐎𝐁𝐄𝐒 𝐂𝐌𝐓𝐑  [✰]`, null, {mentions: [who]});
  global.db.data.users[m.sender].coin += rob;
  global.db.data.users[who].coin -= rob;
  m.reply(`𝐋𝐔𝐄𝐆𝐎 𝐋𝐄 𝐃𝐈𝐉𝐎 𝐀 𝐊𝐈𝐀𝐑𝐀 𝐐 𝐓𝐄 𝐅𝐔𝐍𝐄${rob} 𝐗𝐏 𝐀 @${who.split`@`[0]}* [✰]`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
handler.register = true
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}