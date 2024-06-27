
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('♻️')

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ  𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  𝘽 𝙊 𝙏  ──◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*

🐈‍⬛ 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗲𝗻𝗲𝘀𝗶𝘀 𝗕𝗼𝘁 
🐈‍⬛ 𝗧𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼 𝗺𝗶 𝗺𝗲𝗻𝘂 𝗿𝗮𝗻𝗱𝗼𝗺


*╭──「 RANDOM ♻️ 」*
*┊ »*🐈‍⬛ _*.akira*_
*┊ »*🐈‍⬛ _*.akiyama*_
*┊ »*🐈‍⬛ _*.anna*_
*┊ »*🐈‍⬛ _*.asuna*_
*┊ »*🐈‍⬛ _*.ayuzawa*_
*┊ »*🐈‍⬛ _*.boruto*_
*┊ »*🐈‍⬛ _*.chiho*_
*┊ »*🐈‍⬛ _*.chitoge*_
*┊ »*🐈‍⬛ _*.deidara*_
*┊ »*🐈‍⬛ _*.erza*_
*┊ »*🐈‍⬛ _*.elaina*_
*┊ »*🐈‍⬛ _*.eba*_
*┊ »*🐈‍⬛ _*.emilia*_
*┊ »*🐈‍⬛ _*.hestia*_
*┊ »*🐈‍⬛ _*.hinata*_
*┊ »*🐈‍⬛ _*.inori*_
*┊ »*🐈‍⬛ _*.isuzu*_
*┊ »*🐈‍⬛ _*.itachi*_
*┊ »*🐈‍⬛ _*.itori*_
*┊ »*🐈‍⬛ _*.kaga*_
*┊ »*🐈‍⬛ _*.kagura*_
*┊ »*🐈‍⬛ _*.kaori*_
*┊ »*🐈‍⬛ _*.keneki*_
*┊ »*🐈‍⬛ _*.kotori*_
*┊ »*🐈‍⬛ _*.kurumi*_
*┊ »*🐈‍⬛ _*.madara*_
*┊ »*🐈‍⬛ _*.mikasa*_
*┊ »*🐈‍⬛ _*.miku*_
*┊ »*🐈‍⬛ _*.minato*_
*┊ »*🐈‍⬛ _*.naruto*_
*┊ »*🐈‍⬛ _*.nezuko*_
*┊ »*🐈‍⬛ _*.sagiri*_
*┊ »*🐈‍⬛ _*.sasuke*_
*┊ »*🐈‍⬛ _*.sakura*_
*┊ »*🐈‍⬛ _*.cosplay*_
*┊ »*🐈‍⬛ _*.blackpink*_
*┊ »*🐈‍⬛ _*.cristianoronaldo*_
*┊ »*🐈‍⬛ _*.cr7*_
*┊ »*🐈‍⬛ _*.loli*_
*┊ »*🐈‍⬛ _*.lolivid*_
*┊ »*🐈‍⬛ _*.messi*_
*┊ »*🐈‍⬛ _*.neko*_
*┊ »*🐈‍⬛ _*.waifu*_
*╰─────────────────┈°❀*
`
    let pp = './src/Menu.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢᴇɴᴇꜱɪꜱ ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ \nᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menurandom']
handler.tags = ['main']
handler.command = ['menurandom', 'randomenu'] 

export default handler