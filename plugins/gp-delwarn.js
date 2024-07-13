
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `🌸 ${mssg.noMention} 🌸`
        if (!(who in global.db.data.users)) throw `🌸 ${mssg.userDb}n🌸`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *${mssg.delwarn.toUpperCase()}*
         
▢ ${mssg.warns}: *-1*
▢ ${mssg.warns} ${mssg.total}: *${warn - 1}*`)
         m.reply(`🌸 ${mssg.delWarnUser} 🌸 *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply(`🌸 ${mssg.warnNan} 🌸`)
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
