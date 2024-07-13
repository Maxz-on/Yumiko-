const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.kalahari;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '🌸 *MAPA KALAHARI* 🌸'}, {quoted: m});
};
handler.command = /^(mapakalahari|kalahari)$/i;
handler.tags = ['mapas'];
handler.help = ['kalahari'];
export default handler;

global.kalahari = [
  'https://telegra.ph/file/804a8f96adf89f6ce45ef.jpg',
];