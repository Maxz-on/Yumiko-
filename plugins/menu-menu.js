//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'new': 'ɴ ᴇ ᴡ  ᴄ ᴏ ᴍ ᴀ ɴ ᴅ',
  'ai': 'ᴀ ɪ - ʙ ᴏ ᴛ',
  'ff': 'ꜰ ʀ ᴇ ᴇ  ꜰ ɪ ʀ ᴇ',
  'info': 'ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴄ ɪ ᴏ ɴ',
  'main': 'ᴀ ᴄ ᴇ ʀ ᴄ ᴀ  ᴅ ᴇ',
  'bebot': 'ꜱ ᴜ ʙ  ʙ ᴏ ᴛ ꜱ',
  'game': 'ᴊ ᴜ ᴇ ɢ ᴏ ꜱ',
  'convertir': 'ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ɪ ʀ',
  'econ': 'ᴇ ᴄ ᴏ ɴ ᴏ ᴍ ɪ ᴀ',
  'rpg': 'ʀ ᴇ ɢ ɪ ꜱ ᴛ ʀ ᴏ',
  'pop': 'ᴘ ᴏ ᴘ ᴜ ʟ ᴀ ʀ',
  'sticker': 'ꜱ ᴛ ɪ ᴄ ᴋ ᴇ ʀ ꜱ',
  'img': 'ɪ ᴍ ᴀ ɢ ᴇ ɴ',
  'maker': 'ᴍ ᴀ ᴋ ᴇ ʀ',
  'prem': 'ᴘ ʀ ᴇ ᴍ ɪ ᴜ ᴍ',
  'group': 'ɢ ʀ ᴜ ᴘ ᴏ ꜱ',
  'nable': 'ᴏ ɴ - ᴏ ꜰ ꜰ', 
  'nime': 'ᴀ ɴ ɪ ᴍ ᴇ',
  'rnime': 'ᴀ ɴ ɪ ᴍ ᴇ  ʀ ᴇ ᴀ ᴄ',
  'dl': 'ᴅ ᴇ ꜱ ᴄ ᴀ ʀ ɢ ᴀ ꜱ',
  'tools': 'ᴛ ᴏ ʟ ꜱ',
  'fun': 'ꜰ ᴜ ɴ',
  'cmd': 'ᴅ ᴀ ᴛ ᴀ ʙ ᴀ ꜱ ᴇ',
  'nsfw': 'ɴ ꜱ ꜰ ᴡ',
  'ansfw': 'ɴ ꜱ ꜰ ᴡ ᴀ ɴ ɪ ᴍ ᴇ', 
  'owner': 'ᴏ ᴡ ɴ ᴇ ʀ', 
  'advanced': 'ᴀ ᴠ ᴀ ɴ ᴢ ᴀ ᴅ ᴏ',
  'random': 'ɪ ᴍ ɢ  ʀ ᴀ ɴ ᴅ ᴏ ᴍ',
  'internet': 'ɪ ɴ ᴛ ᴇ ʀ ɴ ᴇ ᴛ',
}
const defaultMenu = {
  before: `
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭─── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊• *ɴᴏᴍʙʀᴇ* :: %name
. .╰─── ︶︶︶︶ ♡⃕  ⌇. . .
 . . ┊⿻ [ *ᴠᴇʀꜱɪᴏɴ ʙᴏᴛ* :: 1.3.0 ] . .
 . . ┊⿻ [ *ᴀᴄᴛɪᴠᴏ* :: %muptime %sbot ] . .
 . . ┊⿻ [ *ꜰᴇᴄʜᴀ* :: ${fecha}]. . 
 . . ┊⿻ [ *ᴜꜱᴜᴀʀɪᴏꜱ* :: %rtotalreg ] . .
 . . ┊⿻ [ *ᴄʀᴇᴀᴅᴏʀ* :: Angelito ]. . 
 . . ╰─────────╮

*▬▭▬▭▬ ᴀʟʟᴍᴇɴᴜ ▬▭▬▭▬*\n
`.trimStart(),
  header: '*╭─「 `%category` 」*',
  body: '*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*%cmd*_ %isdiamond %isPremium',
  footer: '*╰─────────────────┈°✿︎*\n\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `⭐ Powered by FG98 https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n▢ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ  ʙ ᴏ ᴛ  ᴘ ʀ ᴏ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let pp = 'https://i.ibb.co/xFZzGjp/file.jpg'
    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);

    /*conn.sendButton(m.chat, text.trim(), `▢ DyLux  ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ], m, rpl)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(),m, null, fwc)
    m.react('🐈‍⬛') 

  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['allmenu','menúall'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;