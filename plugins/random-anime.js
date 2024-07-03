import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
 conn.sendButton(m.chat, `_${command}_`.trim(), packname, haha, [['🐈‍⬛ SIGUIENTE 🐈‍⬛', `${usedPrefix + command}`]], m)
};
handler.command = handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay'];
handler.tags = ['random'];
export default handler;