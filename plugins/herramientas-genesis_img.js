// créditos para MauroAzcurra
// código modificado por karim-off
import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"
import {
    FormData,
    Blob
} from 'formdata-node';

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    try {
        let text
        if (args.length >= 1) {
            text = args.slice(0).join(" ")
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text
        } else return m.reply("Ingresa el texto")
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ""
        await m.reply(wait)
        if (!mime) return m.reply("Marca una foto")
        let media = await q.download()
        let isTele = /image\/(png|jpe?g)/.test(mime)
        let link = await uploadImage(media)
        const prompt = (text.trim());
        let res = await translate(prompt, 'es').catch(_ => null)
        let result = await WhatImage(link, res[0])
        if (!result) {
            throw 'error.';
        }
        await m.reply(result.output);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
handler.help = ["genesisimg"].map(v => v + " (img)");
handler.tags = ["ai"];
handler.command = /^(genesisimg)$/i;
handler.limit = true;
export default handler;

async function WhatImage(image, prompt) {
    try {
        let form = new FormData();
        form.append('prompt', encodeURIComponent(prompt));
        form.append('image', encodeURIComponent(image));
        const response = await fetch("https://boredhumans.com/api_image_chat.php", {
            method: 'POST',
            body: form,
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const base64Data = await response.text();
        return JSON.parse(base64Data);
    } catch (error) {
        return null;
    }
}
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}