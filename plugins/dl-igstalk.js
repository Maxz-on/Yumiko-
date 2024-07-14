
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `🌸 ${mssg.noUsername} 🌸\n\n${mssg.example} : ${usedPrefix + command} fg98_ff` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
╭──►🌸 *STALKING* 🌸
┆ *🔖${mssg.name}:* ${res.name} 
┆ *🔖${mssg.username}:* ${res.username}
┆ *👥${mssg.followers}:* ${res.followersH}
┆ *🫂${mssg.follows}:* ${res.followingH}
┆ *📌${mssg.bio}:* ${res.description}
┆ *🏝️${mssg.posts}:* ${res.postsH}
┆ *🔗${mssg.link}:* https://instagram.com/${res.username.replace(/^@/, '')}
╰────────────►`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
    } catch {
        m.reply(`🌸 ${mssg.error} 🌸`)
      }
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
