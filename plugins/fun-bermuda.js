const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.bermuda;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '🌸 *MAPA BERMUDA* 🌸'}, {quoted: m});
};
handler.command = /^(mapabermuda|bermuda)$/i;
handler.tags = ['mapas'];
handler.help = ['bermuda'];
export default handler;

global.bermuda = [
  'https://telegra.ph/file/8b598a77e4be7d1b51c14.jpg',
];