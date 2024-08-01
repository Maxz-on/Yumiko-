
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🔞')

let m2 = `
🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓  🌸

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐍𝐒𝐖𝐅
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
┊ ✰ .nsfwloli
┊✰ .nsfwfoot
┊✰ .nsfwass
┊✰ .nsfwbdsm
┊✰ .nsfwcum
┊✰ .nsfwero
┊✰ .nsfwfemdom
┊✰ .nsfwfoot
┊✰ .nsfwglass
┊✰ .nsfworgy
┊✰ .yuri
┊✰ .yuri2
┊✰ .yaoi
┊✰ .yaoi2
┊✰ .panties
┊✰ .tetas
┊✰ .booty
┊✰ .ecchi
┊✰ .furro
┊✰ .hentai
┊✰ .trapito
┊✰ .imagenlesbians
┊✰ .pene
┊✰ .porno
┊✰ .randomxxx
┊✰ .pechos
┊✰ .takeda
┆✰ .asuma
┊✰ .endeavor
┊✰ .ass (ⓓ)
┊✰ .boobs (ⓓ)
┊✰ .lesbiana (ⓓ)
┊✰ .pack (ⓓ)
┊✰ .pussy (ⓓ)
┊ ✰ .xnxx (ⓓ)
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰


╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐍𝐒𝐖𝐅
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
┊✰ .xwaifu (ⓓ)
┊✰ .xneko (ⓓ)
┊✰ .blowjob (ⓓ)
┊✰ .trap (ⓓ)
┊✰ .yuri (ⓓ)
┊✰ .cum (ⓓ)
┊✰ .hentai (ⓓ)
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
`
        let pp = 'https://i.ibb.co/FqPNdLD/file.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n 🌸 𝙔𝙐𝙈𝙄𝙆𝙊 𝘽𝙊𝙏 🌸 \n
𝙇𝘼 𝙈𝙀𝙅𝙊𝙍 𝙍𝙀𝙔𝙉𝘼`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🌸 𝙇𝙊𝘼𝘿𝙄𝙉𝙂....🌸', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)

}
handler.help = ['labiblia']
handler.tags = ['main']
handler.command = ['menu+18', 'labiblia'] 

export default handler