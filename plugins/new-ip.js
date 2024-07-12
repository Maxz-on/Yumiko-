import axios from 'axios'

let handler = async (m, { conn, text }) => {
//await m.reply('🧑🏻‍💻 Buscando...')
let bot = '*LOADING*....🌸'
conn.reply(m.chat, bot, m, fwc, )
  if (!text) return conn.reply(m.chat, '🌸 *Te Faltó La IP* 🌸', m, rcanal, )

  axios.get(`http://ip-api.com/json/${text}?fields=status,message,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,hosting,query`).then ((res) => {
    const data = res.data

      if (String(data.status) !== "success") {
        throw new Error(data.message || "Falló")
      }
    let ipsearch = `
☁️ *I N F O - I P* ☁️

IP : ${data.query}
País : ${data.country}
Código de País : ${data.countryCode}
Provincia : ${data.regionName}
Código de Provincia : ${data.region}
Ciudad : ${data.city}
Distrito : ${data.district}
Código Postal : ${res.data.zip}
Zona Horaria : ${data.timezone}
ISP : ${data.isp}
Organización : ${data.org}
AS : ${data.as}
Mobile : ${data.mobile ? "Si" : "No"}
Hosting : ${data.hosting ? "Si" : "No"}

> By : Maxz 🌸
`.trim()

conn.reply(m.chat, ipsearch, m, fwc, )
})
}

handler.help = ['ip <alamat ip>']
handler.tags = ['new']
handler.command = /^(ip)$/i
handler.mods = true
export default handler