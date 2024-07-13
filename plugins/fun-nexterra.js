const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.nexterra;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🌸 MAPA NEXTERRA 🌸*'}, {quoted: m});
};
handler.command = /^(mapanexterra|nexterra)$/i;
handler.tags = ['mapas'];
handler.help = ['nexterra'];
export default handler;

global.nexterra = [
  'https://telegra.ph/file/06dced71229f99595b99a.jpg',
];