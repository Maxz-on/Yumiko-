// Creditos del codigo a @usxr_angelito //

/* GitHub: https://github.com/karim-off */

/* Bot: https://github.com/Karim-off/xiabot-pro */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n *${usuario}*\n 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐎 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄:\n\n *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n *${usuario}* \n 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐎 𝐋𝐀 𝐅𝐎𝐓𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n *${usuario}*\n 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗢 𝗟𝗔 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝐀𝐇𝐎𝐑𝐀  *${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒' : '𝐓𝐎𝐃𝐎𝐒'} 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐃𝐈𝐓𝐀𝐑 𝐋𝐀 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 𝐄𝐒𝐓𝐀 ${m.messageStubParameters[0] == 'on' ? '𝐂𝐄𝐑𝐑𝐀𝐃𝐎 ' : '𝐀𝐁𝐈𝐄𝐑𝐓𝐎 '}\n ${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐔𝐄𝐃𝐄𝐍 𝐇𝐀𝐁𝐋𝐀𝐑' : '𝐘𝐀 𝐏𝐔𝐄𝐃𝐄𝐍 𝐇𝐀𝐁𝐋𝐀𝐑'} 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n *@${m.messageStubParameters[0].split`@`[0]}*\n  𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍.:\n\n 𝐃𝐄: ${groupName}\n\n 𝐀𝐂𝐂𝐈𝐎𝐍 𝐄𝐂𝐇𝐀 𝐏𝐎𝐑:\n *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓 🌸\n\n  *@${m.messageStubParameters[0].split`@`[0]}*\n  𝐃𝐄𝐉𝐀 𝐃𝐄 𝐒𝐄𝐑 𝐀𝐃𝐌𝐈𝐍 𝐃𝐄:\n\n 𝐆𝐑𝐔𝐏𝐎: ${groupName}\n\n 𝐀𝐂𝐂𝐈𝐎𝐍 𝐄𝐂𝐇𝐀 𝐏𝐎𝐑:\n *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐂𝐀𝐍𝐁𝐈𝐎 𝐋𝐀 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍 𝐃𝐄 𝐋𝐎𝐒 𝐌𝐒𝐉 𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒 𝐀: *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐎 𝐋𝐎𝐒 𝐌𝐒𝐉  𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}