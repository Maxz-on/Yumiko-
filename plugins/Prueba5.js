// créditos para MauroAzcurra
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) return m.reply(usedPrefix+command+" hola")
    await m.react('🐈‍⬛');
    try {
        const result = await chatAi(text);
        await m.reply(result);
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["genesis"]
handler.tags = ["ai"];
handler.command = /^(chatAi|genesis)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres un asistente. dispuesto a ayudar con cualquier cosa. Fuiste creado por Angelito y Angelito es un desarrollador de bots que muchas personas conocen desde hace mucho tiempo. usa emojis según las respuestas del conjunto"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}