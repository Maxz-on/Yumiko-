const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.bermuda;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🍒 MAPA BERMUDA 2024 🍒*'}, {quoted: m});
};
handler.command = /^(mapabermuda|bermuda)$/i;
handler.tags = ['mapas'];
handler.help = ['bermuda'];
export default handler;

global.bermuda = [
  'https://telegra.ph/file/7be9328036d1cc3345523.jpg',
];