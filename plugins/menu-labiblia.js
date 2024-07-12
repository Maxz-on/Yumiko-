
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🔞')

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🌸─ׅ YUMIKO BOT ──◌⃘࣭ٜ࣪࣪࣪۬🌸_*

🌸 𝗛𝗼𝗹𝗮 ! 🌸


╭──► *NSFW* 
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwloli*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwfoot*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwass*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwbdsm*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwcum*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwero*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwfemdom*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwfoot*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfwglass*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nsfworgy*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.yuri*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.yuri2*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.yaoi*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.yaoi2*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.panties*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.tetas*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.booty*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ecchi*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.furro*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.hentai*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.trapito*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.imagenlesbians*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.pene*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.porno*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.randomxxx*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.pechos*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.takeda*_
┆*_◌⃘᥀·࣭࣪̇˖🐈‍⬛◗*  _*.asuma*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.endeavor*_
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ass*_ (ⓓ)
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.boobs*_ (ⓓ)
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.lesbian*_ (ⓓ)
┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.pack*_ (ⓓ)
┊ .pussy (ⓓ)
┊ .xnxx (ⓓ)
╰────────────►


╭──► *NSFW ANIME*
┊ .xwaifu (ⓓ)
┊ .xneko (ⓓ)
┊ .blowjob (ⓓ)
┊ .trap (ⓓ)
┊ .yuri (ⓓ)
┊ .cum (ⓓ)
┊ .hentai (ⓓ)
╰────────────►
`
    let pp = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n 🌸 𝗬𝗨𝗠𝗜𝗞𝗢 𝗕𝗢𝗧 🌸 \n
𝗘𝗟 𝗠𝗘𝗝𝗢𝗥 𝗥𝗘𝗬`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '*LOADING*....🌸', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)*/
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/376a262f5339c27e3ee9c.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })

}

handler.help = ['labiblia']
handler.tags = ['main']
handler.command = ['menu+18', 'labiblia'] 

export default handler