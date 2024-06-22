
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `${mssg.avisoGene4}\n\n*INGRESA EL NOMBRE DE LA BÚSQUEDA*\n_${usedPrefix + command} brattyputy_`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🍒') 
  let play = `
> *Título:* ${vid.title}
> *Duración:* ${vid.timestamp}`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['💿 Musica', `${usedPrefix}fgmp3 ${url}`],
    ['📀 Video', `${usedPrefix}fgmp4 ${url}`]
  ], null, [['🍒 Canal', `${fgcanal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler
