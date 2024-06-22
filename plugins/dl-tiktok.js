import Scraper from '@SumiFX/Scraper'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0])  m.reply(`${mssg.avisoGene4}\n\n*INGRESA EL LINK DEL TIKTOK*\n_Ejemplo: ${usedPrefix + command} <link>_`)
        m.react('✅')

    try {
        let { title, published, quality, likes, commentCount, shareCount, views, dl_url } = await Scraper.tiktokdl(args[0])
            let txt = `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀𝙎 🍒\n`
                txt += `> BY: GenesisBot-Pro`

        await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: txt }, { quoted: m })
    } catch {
    try {
        const api = await fetch(`https://api-starlights-team.koyeb.app/api/tiktok?url=${args[0]}`)
        const data = await api.json()

        if (data.status) {
            const { author, view, comment, play, share, download, duration, title, video } = data.data;
            let txt = `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀𝙎 🍒\n`
                txt += `> BY: GenesisBot-Pro`

            await conn.sendMessage(m.chat, { video: { url: video }, caption: txt }, { quoted: m })
        }
    } catch {
    try {
        const api1 = await fetch(`https://delirius-api-oficial.vercel.app/api/tiktok?url=${args[0]}`)
        const data1 = await api1.json()

        if (data1.status) {
            const { author, repro, like, share, comment, download, duration, title, meta, published } = data1.data
            const publishedDate = formatDate(published)
            const fileSize = convertBytesToMB(meta.media[0].size_org)

            let txt = `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀𝙎 🍒\n`
                txt += `> BY: GenesisBot-Pro`
                
            await conn.sendMessage(m.chat, { video: { url: meta.media[0].org }, caption: txt }, { quoted: m })
        }
    } catch {
}}}}
handler.help = ['tiktok <url tt>']
handler.tags = ['dl']
handler.command = ['tiktok', 'ttdl', 'tiktokdl', 'tiktoknowm']
handler.diamond = true
handler.register = true

export default handler

function convertBytesToMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}