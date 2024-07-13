const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.purgatorio;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🌸 MAPA PURGATORIO 🌸*'}, {quoted: m});
};
handler.command = /^(mapapurgatorio|purgatorio)$/i;
handler.tags = ['mapas'];
handler.help = ['purgatorio'];
export default handler;

global.purgatorio = [
  'https://telegra.ph/file/1ec8c948a58fa4e3bb52d.jpg',
];