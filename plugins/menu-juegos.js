
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🎮')

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ  𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  𝘽 𝙊 𝙏  ──◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*

🐈‍⬛ 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗲𝗻𝗲𝘀𝗶𝘀 𝗕𝗼𝘁 
🐈‍⬛ 𝗧𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼 𝗺𝗶 𝗺𝗲𝗻𝘂 𝗷𝘂𝗲𝗴𝗼𝘀


*╭──「 JUEGOS 🎮 」*
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.acertijo*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.dado*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.mates <modo>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ppt*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.love*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topgays*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topotakus*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toppotaxies*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topintegrantes*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topintegrante*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toplagrasa*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topgrasa*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toppanafrescos*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toppanafresco*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topshiposters*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topshipost*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toppajer@s*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toplindos*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.toplind@s*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topput@s*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topfamosos*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topfamos@s*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.topparejas*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.top5parejas*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.slot <apuesta>*_
*╰─────────────────┈°✿︎*
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
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)*/
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/e3333165610b07351b4cd.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })


}

handler.help = ['menujuegos']
handler.tags = ['main']
handler.command = ['menujuegos', 'menugames'] 

export default handler