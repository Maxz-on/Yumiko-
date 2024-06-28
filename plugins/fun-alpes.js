const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.alpes;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🐈‍⬛ MAPA ALPES 2024 🐈‍⬛*'}, {quoted: m});
};
handler.command = /^(mapaalpes|alpes)$/i;
handler.tags = ['mapas'];
handler.help = ['alpes'];
export default handler;

global.alpes = [
  'https://telegra.ph/file/58b260e72bcc9b222ef71.jpg',
];