import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, args }) => {
        if (!args[0]) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*INGRESA EL LINK DE LA IMG*\n_Ejemplo: . danbooru <link>_'
        if (!/danbooru\.donmai\.us\/posts\/[0-9]+$/i.test(args[0])) throw `Invalid *URL*`
await m.react('🕓')
        let data = await danbooruDl(args[0]), img = data.url
        delete data.url
        let capt = Object.keys(data).map((x) => `${x}: ${data[x]}`).join`\n`
        await conn.sendFile(m.chat, img, '', capt, m)
await m.react('✅')
}
handler.help = ['danbooru <link>'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^danbooru$/i
export default handler

export async function danbooruDl(url) {
        let html = (await axios.get(url)).data
        let $ = cheerio.load(html), obj = {}
        $('#post-information > ul > li').each((idx, el) => {
                let str = $(el).text().trim().replace(/\n/g, '').split(': ')
                obj[str[0]] = str[1].replace('»', '').trim().split(' .')[0]
        })
        obj.url = $('#post-information > ul > li[id="post-info-size"] > a').attr('href')
        return obj
}