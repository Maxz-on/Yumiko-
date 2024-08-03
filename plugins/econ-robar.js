const ro = 30;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `¡𝙃𝙚𝙮! 𝙀𝙨𝙥𝙚𝙧𝙖 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙤𝙗𝙖𝙧* [✰]`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*[❗] 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙥𝙖𝙧𝙖 𝙧𝙤𝙗𝙖𝙧.* [✰]`;
  if (!(who in global.db.data.users)) throw `*[❗] 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.[✰]`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.coin < rob) return m.reply(`😔 @${who.split`@`[0]} 𝙩𝙞𝙚𝙣𝙚 𝙢𝙚𝙣𝙤𝙨 𝙙𝙚 *${ro} xp*\n𝙉𝙤 𝙧𝙤𝙗𝙚𝙨 𝙖 𝙪𝙣 𝙥𝙤𝙗𝙧𝙚, 𝙣𝙤 𝙨𝙚𝙖𝙨 𝙖𝙨𝙞 :´v [✰]`, null, {mentions: [who]});
  global.db.data.users[m.sender].coin += rob;
  global.db.data.users[who].coin -= rob;
  m.reply(`*‣ 𝙌𝙪𝙚 𝙗𝙪𝙚𝙣𝙖 𝙧𝙖𝙩𝙖 𝙚𝙧𝙚𝙨, 𝙍𝙤𝙗𝙖𝙨𝙩𝙚 ${rob} 𝙓𝙋 𝙖 @${who.split`@`[0]}* [✰]`, null, {mentions: [who]});
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