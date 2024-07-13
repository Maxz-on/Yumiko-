
let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, nsfw, captcha, useDocument } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
🌸 *${mssg.gpInfo.toUpperCase()}* 🌸
 *♻️ID:*
   • ${groupMetadata.id}
 *🔖${mssg.name}:* 
• ${groupMetadata.subject}
 *👥${mssg.members}:* ${participants.length}
 *🤿${mssg.gpOwner}:*
• wa.me/${owner.split('@')[0]}
 *🕵🏻‍♂️${mssg.admin}:* ${groupAdmins.length}

 *🪢 ${mssg.gpConf}:*
• 📮 *Welcome:* ${welcome ? '✔️' : '✖️'}
• 🔥 *ModoHorny:* ${modohorny ? '✔️' : '✖️'}
• ❕ *Detect:* ${detect ? '✔️' : '✖️'}
• 🔞 *Nsfw:* ${nsfw ? '✔️' : '✖️'}
• 🚨 *Anti Link Wha:* ${antiLink ? '✔️' : '✖️'}
• 🧬 *Captcha:* ${captcha ? '✔️' : '✖️'}
• 📑 *Document:* ${useDocument ? '✔️' : '✖️'}

  *📬 ${mssg.gpConfMsg}:*
• *Welcome:* ${sWelcome}
• *Bye:* ${sBye}

 *${mssg.desc}* :
   • ${groupMetadata.desc?.toString() || 'desconocido'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m)
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
