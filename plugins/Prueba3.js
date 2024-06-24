
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
👋🏻 Hola¡! Bienvenido A Mi Sub Menú\n\n*Creador:* Angelito\n*Versión:* 1.0.0\n\n🍒 si hay algún error puedes contactarme, usa el comando: #owner\n\nGracias¡! 🔴
`
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

    let pp = './src/Menu.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    await conn.sendList(m.chat, pp, 'menu.jpg', `OPCIONES`, listSections, m);

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help'] 

export default handler