import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
        m.react('✅')
let cristiano = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendButton(m.chat, `${command}`, packname, ronaldo, [['🌸 SIGUIENTE 🌸', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|cr7)$/i
export default handler