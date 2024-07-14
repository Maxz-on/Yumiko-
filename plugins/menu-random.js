
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🌸')

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🌸─ׅ YUMIKO BOT ──◌⃘࣭ٜ࣪࣪࣪۬🌸_*

🌸 𝗛𝗼𝗹𝗮 ! 🌸


╭──► *RANDOM*
┊ .akira
┊ .akiyama
┊ .anna
┊ .asuna
┊ .ayuzawa
┊ .boruto
┊ .chiho
┊ .chitoge
┊ .deidara
┊ .erza
┊ .elaina
┊ .eba
┊ .emilia
┊ .hestia
┊ .hinata
┊ .inori
┊ .isuzu
┊ .itachi
┊ .itori
┊ .kaga
┊ .kagura
┊ .kaori
┊ .keneki
┊ .kotori
┊ .kurumi
┊ .madara
┊ .mikasa
┊ .miku
┊ .minato
┊ .naruto
┊ .nezuko
┊ .sagiri
┊ .sasuke
┊ .sakura
┊ .cosplay
┊ .blackpink
┊ .cristianoronaldo
┊ .cr7
┊ .loli
┊ .lolivid
┊ .messi
┊ .neko
┊ .waifu
╰─────────────────►
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
                displayName: `\n 🌸 𝙔𝙐𝙈𝙄𝙆𝙊 𝘽𝙊𝙏 🌸 \n
𝙇𝘼 𝙈𝙀𝙅𝙊𝙍 𝙍𝙀𝙔𝙉𝘼`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🌸 𝙇𝙊𝘼𝘿𝙄𝙉𝙂....🌸', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)*/
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/4fba380f8873af7e8a581.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })

}

handler.help = ['menurandom']
handler.tags = ['main']
handler.command = ['menurandom', 'randomenu'] 

export default handler