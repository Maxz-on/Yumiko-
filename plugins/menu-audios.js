
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🔈')

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🌸─ׅ YUMIKO BOT ──◌⃘࣭ٜ࣪࣪࣪۬🌸_*

🌸 𝗛𝗼𝗹𝗮 ! 🌸


╭──► *AUDIOS*
┊ .Ara
┊ .Finos señores 
┊ .Bañate
┊ .Buenos dias
┊ .Diagnóstico 
┊ .Elmo
┊ .Puto
┊ .Gemidos
┊ .Pobre perra 
┊ .Manco
┊ .Miau
┊ .Traka
┊ .Turip
┊ .Hinmo potaxie
┊ .A
┊ .:c
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
      video: {url: "https://telegra.ph/file/bca65c9fc39ac7261a17d.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      }, {quoted: m})


}

handler.help = ['menuaudios']
handler.tags = ['main']
handler.command = ['menuaudios', 'audiosmenu'] 

export default handler