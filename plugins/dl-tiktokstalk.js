
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ ${mssg.noUsername}`
  
  try {  	
  let res = await fg.ttStalk(args[0])
  let txt = `
╭──► 🌸 *TIKTOK STALK* 🌸
┆ *🔖${mssg.name}:* ${res.name}
┆ *🔖${mssg.username}:* ${res.username}
┆ *👥${msag.followers}:* ${res.followers}
┆ *🫂${msag.follows}:* ${res.following}
┆ *📌${mssg.desc}:* ${res.desc}
┆ *🔗${mssg.link}:* https://tiktok.com/${res.username}
╰────────────►`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
  m.reply(`🌸 ${mssg.error} 🌸`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
