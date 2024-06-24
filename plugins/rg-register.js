
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|+] *?)([0-9]*)([.|+] *?)([MFNO])?$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/Menu.jpg')
 if (user.registered === true) throw `✳️ ${mssg.regIsOn}\n\n${usedPrefix}unreg <sn>`

  let te = `${mssg.avisoGene4}\n\n*USE EL COMANDO*\n_🍒 ${usedPrefix + command} Nombre+Edad+Genero_\n\n» ${mssg.genderList}:\n*- M* = ${mssg.man}\n*- F =* ${mssg.woman}\n*- N* = ${mssg.other}`
  if (!Reg.test(text)) throw te
  let [_, name, splitter, age, splitter2, gen] = text.match(Reg)
  if (!name) throw te
  if (!age) throw te
  if (name.length >= 30) throw `✳️ ${mssg.nameMax}`
  age = parseInt(age)
  if (age > 60) throw `👴🏻 ${mssg.oldReg}`
  if (age < 10) throw '🚼 Vaya a ver la vaca lola'
  let genStr = gen && gen.toUpperCase() === 'M' ? `♂️ ${mssg.man}` : (gen && gen.toUpperCase() === 'F' ? `♀️ ${mssg.woman}` : (gen && gen.toUpperCase() === 'N' ? `⚧ ${mssg.other}` : null))
  if (!genStr) throw `✳️ ${mssg.genderList}: M, F o N\n\n*- M* = ${mssg.man}\n*- F*- ${mssg.woman}\n*- N* = ${mssg.other}`
  user.name = name.trim()
  user.age = age
  user.genero = genStr
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let regi = `
「 *REGISTRO GENESIS* 」

» *NOMBRE:* ${name}
» *EDAD:* ${age}
» *GENERO:* ${genStr}
» *N° SERIE:*\n\n${sn}`
  conn.sendFile(m.chat, pp, 'img.jpg', regi, m)
}

handler.help = ['reg'].map(v => v + ' <nombre.edad.género>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
