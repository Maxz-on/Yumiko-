let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('⭐')

let m2 = `
🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓  🌸

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐆𝐈𝐓𝐒
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮ 
┃ ✰.𝐀𝐍𝐆𝐋:https://github.com/Angelito-OFC
┃ ✰.𝐀𝐋𝐄:https://github.com/ale-rmz
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰


╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐏𝐑𝐈𝐍𝐂
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
 ┆
 ┆ Angelito:+591 68683798
 ┆
 ┆ Ale:+54 9 358 560-4128
 ┆ 
 ╰─────────────►

 ╭──►🔰𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 𝗖𝗢𝗡: 
 ┆"🫧 丂ㄒ卂千千 乂乃 🫧"
 ╰─────────────►`
        let pp = 'https://i.ibb.co/FqPNdLD/file.jpg' 

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
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)

}
handler.help = ['Creditos']
handler.tags = ['main']
handler.command = ['Creditos', 'creditos', 'credito', 'credit'] 

export default handler