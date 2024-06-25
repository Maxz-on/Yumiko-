import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

m.react('✅') 
await conn.reply(m.chat, '⏱ 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙈𝙚𝙣𝙪.....', m, rpl)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
let msg = generateWAMessageFromContent(m.chat, { 
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
      "deviceListMetadata": {},
      "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "• BY: GÉNESIS - ANGELITO"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "👋🏻 Hola¡! Bienvenid@ A Mi Sub Menú\n🌿 Soy Génesis Bot Pro\n\n*🫅 Creador:* Angelito\n*♻️ Versión:* 1.1.0\n*📚 Librería:* Baileys\n⚙️ *Prefijo:* [ . ]\n\n🍒 si hay algún error puedes contactarme, usa el comando: #owner\n\n*⚠️ Si el menu no te funciana prueba con #allmenu*\n\nGracias¡! ‼️",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎\",\"sections\":[{\"title\":\"🔖 LISTA MENUS DE GENESIS\",\"highlight_label\":\"new\",\"rows\":[{\"header\":\"MENU 📚\",\"title\":\"\",\"description\":\"Menu Completo 🍒\",\"id\":\".allmenu\"},{\"header\":\"MENU AUDIOS 🔊\",\"title\":\"\",\"description\":\"Menu Audios 🎶\",\"id\":\".menuaudios\"},{\"header\":\"MENU  JUEGOS 🎮\",\"title\":\"\",\"description\":\"Menu juegos 🎮\",\"id\":\".menugames\"}]}]}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"🍒 𝘾𝘼𝙉𝘼𝙇\",\"url\":\"https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y\"}"
              }
       ],
   })
    })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|ayuda|menú)$/i
handler.register = true 

export default handler