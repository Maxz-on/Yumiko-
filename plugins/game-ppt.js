
let poin = 200
let cooldown = 15000
let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let reseqv = `${mssg.ppt(usedPrefix, command)} [✰]`
    if (!args[0]) throw reseqv
    let text = args[0].toLowerCase()
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastppt < cooldown) throw `⏱️ ${mssg.pptCd} *${msToTime((user.lastppt + cooldown) - new Date())}*`
    if (user.coin < poin) return m.reply(`${mssg.coinNan} [✰]`) 
    var astro = Math.random()
    
    if (astro < 0.34) {
        astro = `${mssg.stone}`
    } else if (astro > 0.34 && astro < 0.67) {
        astro = `${mssg.sciss}`
    } else {
        astro = `${mssg.paper}`
    } 
    
    user.lastppt = new Date * 1

    if (text == astro) {
      user.coin += 10
        m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.tie} *+10 🪙*`)
    } else if (text == `${mssg.stone}`) {
        if (astro == `${mssg.sciss}`) {
            user.coin += poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`)
        } else {
          user.coin -= poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`)
        }
    } else if (text == `${mssg.sciss}`) {
        if (astro == `${mssg.paper}`) {
            user.coin += poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`)
        } else {
          user.coin -= poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`)
        }
    } else if (text == `${mssg.paper}`) {
        if (astro == `${mssg.stone}`) {
            user.coin += poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n🎁 ${mssg.win} *+${poin} 🪙*`)
        } else {
          user.coin -= poin
            m.reply(`  ▢ 🪨  📄  ✂️\n\n‣ ${mssg.you} : ${text}\n‣ ${botName}: ${astro}\n\n😔 ${mssg.lost} *-${poin} 🪙*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds + ` ${mssg.second}`
}
