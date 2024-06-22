import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${mssg.avisoGene4}\n\n*INGRESA EL NOMBRE DE LA APK*\n_Ejemplo: .apk <nombre>_`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝘼𝙋𝙏𝙊𝙄𝘿𝙀 📲\n\n🔥 𝙉𝙊𝙈𝘽𝙍𝙀: ${data5.name}\n🚀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀: ${data5.package}\n⏳ 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏..: ${data5.lastup}\n🕋 𝙏𝘼𝙈𝘼Ñ𝙊: ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '${mssg.avisoGene4}\n\n*El archivo es demasiado grande por lo cual no se enviara*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `'${mssg.avisoGene4}\n\n*Error no se encontraron resultados para su busqueda*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;