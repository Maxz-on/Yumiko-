let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('⭐')

let m2 = `╭─────────────►
 ╭──►🌸 _*Yumiko Bot*_ 🌸
 ╭──► 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗲𝘀(𝗦𝘁𝗮𝗳𝗳) 
 ╰─────────────► 
 ━━━━━━━━━━━━━━━━━━━━ 
 ┣┅⟣✦𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝗶𝗼𝘀 𝗚𝗶𝘁𝗵𝘂𝗯 
  
 ┣𝘼𝙭𝙚𝙡|𝗚𝗶𝘁𝗵𝘂𝗯:https://github.com/Jxtxn17/BaileyBot-MD 
  
 ┣𝗔𝘇𝗮𝗺𝗶|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/Azamijs/Curiositybot-MD 
  
 ┣𝗛𝗮𝗰𝗵𝗲𝗷𝗼𝘁𝗮|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/HACHEJOTA/Hachiko-bot-MD 
  
 ┣𝙀𝙣𝙙𝙚𝙧|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/Ender-GB-Isis777/LOBO-BOT-MD
  
 ┣𝗘𝗱𝗲𝗿|𝗚𝗶𝘁𝗵𝘂𝗯:https://github.com/Aleixon127271 
  
 ┣┅⟣✦𝗡𝘂𝗺𝗲𝗿𝗼𝘀  
 ┣𝘼𝙭𝙚𝙡:+51 929 972 576
 ┣𝗔𝘇𝗮𝗺𝗶:+52 729 488 8993 
 ┣𝗛𝗮𝗰𝗵𝗲𝗷𝗼𝘁𝗮:+52 443 786 3111 
 ┣𝙀𝙣𝙙𝙚𝙧:+505 5812 4470
 ┣𝗘𝗱𝗲𝗿:+57 310 6040746 
 ┗━━━━━━━━━━━━━━━━━━┛`
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