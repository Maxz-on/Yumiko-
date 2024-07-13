const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.agenda;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '🌸 *AGENDA SEMANAL* 🌸'}, {quoted: m});
};
handler.command = /^(agendasemanal|agenda)$/i;
handler.tags = ['internet'];
handler.help = ['agenda'];
export default handler;

global.agenda = [
  'https://telegra.ph/file/7c812d2420f70d1476dd8.jpg',
];