import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let user = global.db.data.users[who];
    let username = conn.getName(who);

    if (!(who in global.db.data.users)) throw `✳️ Este usuario no está en mi base de datos`;

    const line = '━━━━━━━━━━━━━━━━━';

    const wealthLevel = () => {
        if (user.bank <= 3000) return '𝙷𝚄𝙼𝙸𝙻𝙳𝙴';
        else if (user.bank <= 6000) return '𝙳𝙴 𝙱𝙰𝙹𝙾𝚂 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂';
        else if (user.bank <= 100000) return '𝙲𝙻𝙰𝚂𝙴 𝙼𝙴𝙳𝙸𝙰';
        else if (user.bank <= 1000000) return '𝚁𝙸𝙺𝙾';
        else if (user.bank <= 10000000) return '𝙼𝙸𝙻𝙻𝙾𝙽𝙰𝚁𝙸𝙾';
        else if (user.bank <= 1000000000) return '𝙼𝚄𝙻𝚃𝙸𝙼𝙸𝙻𝙻𝙾𝙽𝙰𝚁𝙸𝙾';
        else if (user.bank <= 10000000000) return '𝙱𝙸𝙻𝙻𝙾𝙽𝙰𝚁𝙸𝙾';
    };

    const emojis = ['🌟', '💼', '💰', '🏦', '📈', '📊', '📉', '💹', '💵', '💲', '💱', '🏧', '💳', '💸', '🧾'];
    const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

    const bankMessage = `
${line}
${randomEmoji()} *BANK | ${username}* ${randomEmoji()}
${line}

*💎 DIAMANTES:* _${user.diamond.toLocaleString()}_
*🍒 GENECOINS:* _${user.coin.toLocaleString()}_

${randomEmoji()} *ORO*: ${user.credit} ${randomEmoji()}
${randomEmoji()} *BÓVEDA*: ${user.bank} ${randomEmoji()}

${randomEmoji()} *NIVEL DE RIQUEZA*: ${wealthLevel()} ${randomEmoji()}
${line}
`;

    try {
        const imgUrl = 'https://telegra.ph/file/61c329015eb99bc2ab588.jpg';
        const responseImg = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        await conn.sendFile(m.chat, responseImg.data, "thumbnail.jpg", bankMessage, m);
    } catch (e) {
        await conn.reply(m.chat, bankMessage, m);
    }
}
handler.help = ['bank'];
handler.tags = ['economy'];
handler.command = ['bank', 'vault', 'balance'];

export default handler;