
import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('✅');

    let result = await yts(text);
    let ytres = result.videos;


    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `LISTAS DE MENUS GENESIS`,
            rows: [
                {
                    header: 'Menu Completo',
                    title: "",
                    description: `Para ver todos los comandos\n`, 
                    id: `.allmenu`
                },
                {
                    header: "Menu Audios",
                    title: "" ,
                    description: `Para ver todos los audios\n`, 
                    id: `.menu2`
                },
                {
                    header: "Owner",
                    title: "" ,
                    description: `para ver el número del dueño\n`, 
                    id: `.owner`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '👋🏻 Hola¡! Bienvenido A Mi Sub Menú\n\n*Creador:* Daniel\n*Versión:* 1.0.0\n\n💮 si hay algún error puedes contactarme, usa el comando: #owner\n\nGracias¡! 🔴', `\n 📀 Resultados de:\n *${text}*`, `OPCIONES`, ytres[0].image, listSections, m);
};

handler.help = ['main']
handler.tags = ['help']
handler.command = ['menu', 'help'] 
handler.disabled = false

export default handler