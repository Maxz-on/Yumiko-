import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;

    let totalusr = Object.keys(global.db.data.users).length;
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "> *`✨ 𝘉𝘰𝘵 :`* 𝘗𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭"
        : "> *`🌿 𝘉𝘰𝘵 : 𝘚𝘶𝘣 - 𝘣𝘰𝘵 𝘥𝘦`* " + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nGenesis Bot \n${greeting} ${username}\n𝐀𝐪𝐮𝐢 𝐓𝐢𝐞𝐧𝐞𝐬 𝐄𝐥 𝐌𝐞𝐧𝐮`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    await conn.reply(m.chat, '⏱ *_`Cargando Menu`_*', fcontact);

    m.react("💬");
    let menu = ``;

    let txt = ""
    txt += "ꕥ─────────────────ꕥ\n\n";
    txt += "\t\t*`玖 Iɴꜰᴏ - Bᴏᴛ 玖`*\n\n";
    txt += `${sbot}\n`;
    txt += '> *`⚙ 𝘗𝘳𝘦𝘧𝘪𝘫𝘰 :`*' + ` [  ${usedPrefix}  ]\n`;
    txt += '> *`👑 𝘔𝘪 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘌𝘴 :`*' + ` JTxs\n`;
    txt += '> *`🤖 𝘚𝘶𝘣 - 𝘉𝘰𝘵𝘴 𝘈𝘤𝘵𝘪𝘷𝘰𝘴:`*' + ` ${totalUsers || '0'}\n`;
    txt += '> *`👥 𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴 :`*' + ` ${totalusr} \n`;
    txt += '> *`🗃 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘴 :`*' + ` ${rtotalreg}\n`;
    txt += '> *`⏱ 𝘓𝘭𝘦𝘷𝘰 𝘈𝘤𝘵𝘪𝘷𝘢 :`*' + ` ${uptime}\n\n`;
    txt += "ꕥ─────────────────ꕥ\n";

    let listSections = [];

    listSections.push({
        title: `MENUS DISPONIBLES DE XIA`,
        rows: [
            {
                header: "allmenu",
                title: "ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ",
                description: `ᴘᴀʀᴀ ᴠᴇʀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ`,
                id: `${usedPrefix}allmenu`,
            },
            {
                header: ".",
                title: ".",
                description: `.`,
                id: `${usedPrefix}test`,
            },
        ],
    });

    let vid = "https://telegra.ph/file/f4dd227597359d218c2d1.mp4";
    let img = "https://telegra.ph/file/50b12cf2397cfd8b7c070.jpg";
    let img2 = "https://i.ibb.co/gwm5mXm/file.png";
    let img3 = "https://i.ibb.co/0s8V5FM/file.png";
    let img4 = "https://telegra.ph/file/d81ef3219d7e6b292e7c4.jpg";
    let img5 = "https://telegra.ph/file/da4501c9a8fda0b9c96b1.jpg";
    let img6 = "https://telegra.ph/file/ce57807eed899516484c7.jpg";
    let img8 = "https://telegra.ph/file/3594f35921ce75d5c5e16.jpg";
    let img9 = "https://telegra.ph/file/4f89789a5b1f874622ffd.jpg";
    let img10 = "https://i.ibb.co/SKm0T9S/file.jpg";
    let img11 = "https://telegra.ph/file/20633f54b3d054c95cd58.jpg";

    await conn.sendList(m.chat, menu, txt, `𝐋𝐢𝐬𝐭𝐚 𝐌𝐞𝐧𝐮𝐬`, [vid, img, img2, img3, img4, img5, img6, img8, img9, img10, img11].getRandom(), listSections, m);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;