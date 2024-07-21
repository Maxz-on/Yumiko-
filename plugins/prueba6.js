if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Colaboradores*

⬡ https://github.com/WOTCHITO
⬡ https://github.com/HACHEJOTA
⬡ https://github.com/EnderLB
⬡ https://github.com/Diego-YL-177

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Colaboradores* 

⬡ *Gata Dios*
@593968263524

⬡ *ReyEndymion*
@5215517489568

⬡ *Wotchito*
@573027866596

⬡ *HJ*
@524437863111

⬡ *Ender*
@50558124470

⬡ *Jxjxn17*
@51929972576

⬡ *Wilmer*
@50258115623

⬡ *Jose*
@573173090446

⬡ *Katashi Fukushima*
@51948705559

⬡ *Daniel*
@33760536110

⬡ *X_Arumiii*
@5215610314499

⬡ *Wilson*
@5492964650915

⬡ *Cpw*
@573003025991

⬡ *Diego*
@573012482597`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}

}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handlerconst rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length; 
     const more = String.fromCharCode(8206); 
     const readMore = more.repeat(850); 
     const url = global.md 
     const taguser = '@' + m.sender.split('@s.whatsapp.net')[0]; 
     const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']; 
     const document = doc[Math.floor(Math.random() * doc.length)]; 
     const str = `┏━━━━━━━━━━━━━━━━━━ 
 ┣┅⟣✦ 𝘽𝙖𝙞𝙡𝙚𝙮𝗕𝗼𝘁-𝗠𝗗 
 ┣┅⟣✦ 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗲𝘀(𝗦𝘁𝗮𝗳𝗳) 
 ┗━━━━━━━━━━━━━━━━━━┛ 
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
 ┗━━━━━━━━━━━━━━━━━━┛ 
  `.trim(); 
     if (m.isGroup) { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m}); 
     } else { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2}); 
     } 
   } catch { 
     conn.reply(m.chat, '[❕] 𝗔𝗹𝗴𝗼 𝘀𝗮𝗹𝗶𝗼 𝗺𝗮𝗹, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝗦𝘁𝗮𝗳𝗳', m); 
   } 
 }; 
 handler.command = /^(colab|colaboradores)$/i; 
 handler.exp = 50; 
 handler.fail = null; 
 export default handler; 
 function clockString(ms) { 
   const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':'); 
       }