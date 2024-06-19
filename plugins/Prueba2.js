import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, {args,conn,command}) => {

    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply("Uso *bardimg (texto/media)*")

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `✳️ ${mssg.replyImg}`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  
     if (mime && command === "bardimg") {
        let media = await q.download()
        let isTele = /image\/(png|jpe?g)/.test(mime)
        let link = await uploadImage(media)
            try {
                let res = await AemtBardImg(text, link)
                let result = await translate(res, 'es');
                await m.reply(result[0].trim());
            } catch (e) {
                await m.reply(eror);
            }
        
    } else return m.reply("Uso *bardimg (texto/media)*")
}
handler.help = ['bardimg']
handler.tags = ['tools']
handler.command = ['bardimg']

export default handler


async function AemtBardImg(query, url) {
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    };

    const bardRes = await fetch(`https://aemt.me/bardimg?url=${url}&text=${query}`, {
        method: "get",
        headers
    });
    const bardText = await bardRes.json();
    return bardText.result;
};

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