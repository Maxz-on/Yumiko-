let handler = async (m, { conn, command }) => {
  let user = global.db.data.users[m.sender]
  let imgr = flaaa.getRandom()
  const caption = `
${htki} *B A N K  U S E R* ${htka}
${dmenub} ðŸ“› *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
${dmenub} ðŸ’³ *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'âœ–ï¸'}
${dmenub} ðŸ›ï¸ *Bank:* ${user.bank} ðŸ’² / ${user.fullatm} ðŸ’²
${dmenub} ðŸ’¹ *Money:* ${user.money} ðŸ’²
${dmenub} ðŸ¤– *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : 'âœ–ï¸'}
${dmenub} ðŸŒŸ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
${dmenub} ðŸ“‘ *Registered:* ${user.registered ? 'Yes':'No'}
${dmenuf}
`.trim()
  
  await conn.sendFile(m.chat, imgr + command, "", caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank(cek)?|cekbank)$/i

handler.register = false
export default handler