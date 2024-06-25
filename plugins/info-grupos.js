 
let handler = async (m, { conn }) => {
m.react('✅')

m.reply(`*GENESIS GRUPOS*

*» Canal*
${fgcanal}

*» Grupo Avisos*
${bgp}

*» Grupo Global*
${bgp2}

*» Grupo Hot*
${bgp3}
`)

}
handler.help = ['support']
handler.tags = ['info']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
