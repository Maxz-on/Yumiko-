import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '${mssg.avisoGene3}\n\n
 🌸 *RESPONDA A UNA IMAGEN O VIDEO PARA HACERLO URL* 🌸';
m.react('🌸')
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`${mssg.avisoGene2}\n\n*ENLACE DE SU ARCHIVO:*\n${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['convertir'];
handler.command = /^(upload|tourl)$/i;
export default handler;