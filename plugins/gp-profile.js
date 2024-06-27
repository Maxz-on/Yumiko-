
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn, genero, prem, coin, bank, language} = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let premG = global.prems.includes(who.split`@`[0]) || prem
let sn = createHash('md5').update(who).digest('hex')

let str = `
🐈‍⬛ 𝗣 𝗘 𝗥 𝗙 𝗜 𝗟 🐈‍⬛

「🐈‍⬛」𝗨𝘀𝘂𝗮𝗿𝗶𝗼: @${who.replace(/@.+/, '')}
「🐈‍⬛」𝗡𝗼𝗺𝗯𝗿𝗲𝘀:
 • ${username} ${registered ? '\n   • ' + name + ' ': ''}
「📱」𝗡𝘂𝗺𝗲𝗿𝗼: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
「📱」𝗟𝗶𝗻𝗸: wa.me/${who.split`@`[0]}${registered ? `\n「🍀」𝗘𝗱𝗮𝗱: ${age}\n「🧬」𝗚𝗲𝗻𝗲𝗿𝗼: ${genero}` : ''}
「🌎」𝗜𝗱𝗶𝗼𝗺𝗮: ${language}
「⚠️」𝗔𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮𝘀: ${warn}/${maxwarn}
「🐈‍⬛」𝗚𝗲𝗻𝗲𝗖𝗼𝗶𝗻𝘀: ${coin.toLocaleString()}
「💎」𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀: ${diamond.toLocaleString()}
「🆙」𝗡𝗶𝘃𝗲𝗹: ${level}
「⬆️」𝗫𝗣: ${mssg.total} ${exp}
「🏆」𝗥𝗮𝗻𝗴𝗼: ${role}
「📄」𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼: ${registered ? '✅': '❎'}
「🎫」𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${premG ? '✅' : '❎'}

> ${mssg.ig}`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['profile', 'perfil']

export default handler
