import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '\n𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐆 𝐎 𝐕𝐈𝐃𝐄𝐎 𝐏𝐀𝐑𝐀 𝐇𝐀𝐂𝐄𝐑 𝐔𝐑𝐋 [✰]', m, fwc)
  await m.react('🌸')
  try {
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()
  let txt = ``
      txt += `  𝐄𝐍𝐋𝐀𝐂𝐄 : ${link} [✰]\n`
      txt += `  𝐀𝐂𝐎𝐑𝐓𝐀𝐃𝐎 : ${await shortUrl(link)}\n`
      txt += `  𝐓𝐀𝐌𝐀𝐍̃𝐎 : ${formatBytes(media.length)}\n`
      txt += `  𝐄𝐗𝐏𝐈𝐑𝐀 : ${isTele ? 'No expira' : 'Desconocido'}\n\n`
      txt += ``

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, fwc)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
}