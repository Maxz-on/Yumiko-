import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''

  if (!mime.startsWith('image/')) {
    return m.reply(' 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀𝐔𝐍𝐀 𝐈𝐌𝐆🌸')
  }
  await m.react('🌸')

  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
    headers: {
      ...formData.getHeaders()
    }
  })

  if (api.data.data) {
    let txt = `*ä¹‚  𝐈𝐁𝐁  - 𝐔𝐏𝐋𝐎𝐃𝐄\n\n`
        txt += `. 𝐓𝐈𝐓𝐔𝐋𝐎 : ${q.filename || 'x'}\n`
        txt += `. 𝐈𝐃 : ${api.data.data.id}\n`
        txt += `. 𝐄𝐍𝐋𝐀𝐂𝐄 : ${api.data.data.url}\n`
        txt += `. 𝐃𝐈𝐑𝐄𝐂𝐓𝐎 : ${api.data.data.url_viewer}\n`
        txt += `. 𝐌𝐈𝐍𝐄 : ${mime}\n`
        txt += `. 𝐅𝐈𝐋𝐄 : ${q.filename || 'x.jpg'}\n`
        txt += `. 𝐄𝐗𝐓𝐄𝐍𝐒𝐈𝐎𝐍 : ${api.data.data.image.extension}\n`
        txt += `. 𝐃𝐄𝐋𝐄𝐓𝐄 : ${api.data.data.delete_url}\n\n`
        txt += `© By: Mxz`
    await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, fwc)
    await m.react('✅')
  } else {
    await m.react('✅')
  }
}
handler.tags = ['convertir']
handler.help = ['ibb']
handler.command = /^(tourl2|toibb)$/i
handler.register = true 
export default handler