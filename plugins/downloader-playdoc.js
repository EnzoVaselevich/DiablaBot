import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `*🥀 Escriba Un Nombre De Alguna Cancion*\n\n*Ejemplo:*\n*${usedPrefix + command} Sombra - Maiye Torrex* `;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play3' || command == 'playdoc') {
      additionalText = 'audio';
    } else if (command === 'youtube1' || command == 'playdoc2') {
      additionalText = 'video';
    }
    await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
    const texto1 = `♡₊˚ ₊✧♡₊˚ 🌌・₊✧★🎸🍷°⋆♡₊˚ 🎵
> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:
> • ${yt_play[0].title}
> •┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙀𝙉𝙇𝘼𝘾𝙀:
> • ${yt_play[0].url}
> •┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 𝙀𝙉:
> ${yt_play[0].ago}
♡₊˚ ₊✧♡₊˚ 🌌・₊✧★🎸🍷°⋆♡₊˚ 🎵
01:06 ======⬤------------------------- ${secondString(yt_play[0].duration.seconds)}

> ⓘ *_Enviando ${additionalText}, aguarde un momento...*`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play3' || command == 'playdoc') {
      try {
        const q = '128kbps';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
      } catch {
        try {
          const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
          const lolh = await lolhuman.json();
          const n = lolh.result.title || 'error';
          await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        } catch {
          try {
            const searchh = await yts(yt_play[0].url);
            const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
            const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
            const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
            conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*🥀 Error No Se Pudo Enviar El Audio*', m);
          }
        }
      }
    }
    if (command == 'youtube1' || command == 'ytdoc1') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:\n${ttl}\n\n> ⓘ 𝙋𝙀𝙎𝙊:\n> ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:\n> ${n}\n\n> ⓘ 𝙋𝙀𝙎𝙊:\n> ${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.', m);
          }
        }
      }
    }
  } catch {
    throw '> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤...';
  }
};
handler.help = ['play3', 'play4'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playdoc|ytdoc1|play3|youtube1)$/i;
handler.register = true
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}


// import { youtubeSearch } from '@bochilteam/scraper'
// import fetch from 'node-fetch'
// let handler = async (m, { conn, command, text, usedPrefix }) => {
// if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
// try {
// let vid = (await youtubeSearch(text)).video[0]
// let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
// const urll = 'https://www.youtube.com/watch?v=' + videoId
// var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
// var document = doc[Math.floor(Math.random() * doc.length)]
// const buttons = [
// { buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎𝐃𝐎𝐂 🎵' }, type: 1 },
// { buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎𝐃𝐎𝐂 🎥' }, type: 1 },
// { buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋' }, type: 1 }, ]
// let texto1 = `*◉—⌈🔊 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 🔊⌋—◉*\n
// ❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
// ❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
// ❏ ⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
// ❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
// ❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
// ❏ 🔗 *𝙻𝙸𝙽𝙺:* ${urll}`.trim()
// let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}}
// conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// } catch {
// try {
// let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
// let { videoId, title, views, published, thumbnail } = await vid2.result[0]
// const url = 'https://www.youtube.com/watch?v=' + videoId
// let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
// let jsonn = await ytLink.json()
// let aud = await jsonn.result.audio
// let capt = `❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${published}\n❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
// const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋'}, type: 1}]
// const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
// let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
// } catch {
// throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'}}}
// handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
// handler.tags = ['downloader']
// handler.command = /^play3|playdoc?$/i
// export default handler
