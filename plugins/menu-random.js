
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🌸')

let m2 = `
🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓  🌸


╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐑𝐀𝐍𝐃𝐎𝐌
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
┃ ✰ .akira
┃ ✰ .akiyama
┃ ✰ .anna
┃ ✰ .asuna
┃ ✰ .ayuzawa
┃ ✰ .boruto
┃ ✰ .chiho
┃ ✰.chitoge
┃ ✰ .deidara
┃ ✰ .erza
┃ ✰ .elaina
┃ ✰ .eba
┃ ✰ .emilia
┃ ✰ .hestia
┃ ✰ .hinata
┃ ✰ .inori
┃ ✰ .isuzu
┃ ✰ .itachi
┃ ✰ .itori
┃ ✰ .kaga
┃ ✰ .kagura
┃ ✰.kaori
┃ ✰ .keneki
┃ ✰ .kotori
┃ ✰ .kurumi
┃ ✰ .madara
┃ ✰ .mikasa
┃ ✰ .miku
┃ ✰ .minato
┃ ✰ .naruto
┃ ✰ .nezuko
┃ ✰ .sagiri
┃ ✰ .sasuke
┃ ✰ .sakura
┃ ✰ .cosplay
┃ ✰ .blackpink
┃ ✰ .cristianoronaldo
┃ ✰ .cr7
┃ ✰ .loli
┃ ✰ .lolivid
┃ ✰ .messi
┃ ✰ .neko
┃ ✰ .waifu
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
`
       let pp = 'https://i.ibb.co/FqPNdLD/file.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n 🌸 𝐘𝐔𝐌𝐈𝐊𝐎 𝐁𝐎𝐓 🌸 \n
𝐋𝐀 𝐌𝐄𝐉𝐎𝐑 𝐑𝐄𝐘𝐍𝐀`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 メ 𝐌𝐄𝐍𝐔 シ︎', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)

}

handler.help = ['menurandom']
handler.tags = ['main']
handler.command = ['menurandom', 'randomenu'] 

export default handler