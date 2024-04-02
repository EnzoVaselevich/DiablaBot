import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*❥᭢ᰩ𝐏𝐑𝐎𝐍𝐓𝐎 𝐒𝐄 𝐄𝐍𝐕𝐈𝐀𝐑𝐀 𝐄𝐋 𝐌𝐄𝐍𝐔᷍᭢ᩜ༉*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ¡𝗛𝗼𝗹𝗮!', body: '𝖣𝗂𝖺𝖻𝗅𝖺𝖡𝗈𝗍-𝖬𝖣 🌸🌹', sourceUrl: global.channel, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🌸', key: m.key } })
  let txt =`╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║🌹 \`𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭-𝐌𝐃\` 🌸
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║𝘏𝘰𝘭𝘢 ${taguser}
║ ${date}
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║✨ \`𝑇𝑈𝑆 𝑅𝐸𝐶𝑈𝑅𝑆𝑂𝑆\` ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║🚻 \`Nivel\` ➝ ${level}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💎 \`Diamantes\` ➝ ${limit}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💰 \`DiablaCoins\` ➝ ${money}
║•┄┄┄┄┄┄┄┄┄┄┄•
║🪙 \`Monedas\` ➝ ${joincount}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⚔️ \`Rango\` ➝ ${role}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⭐ \`Experiencia\` ➝ ${exp}
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝


╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║        🗂️ \`𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂𝑁\` 🗂️
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#contactos_
> _#cuentasnz_
> _#creador_
> _#donar_
> _#tipobot_
> _#mirecurso_
> _#estado_
> _#infobot_
> _#gruponz_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║            🟢 \`𝑂𝑁 𝑌 𝑂𝐹𝐹\` 🔴
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#on *antiprivado*_ 
> _#on *restrict*_
> _#on *autoread*_
> _#on *antispam*_
> _#on *anticall*_
> _#on *welcome*_
> _#on *antilink2*_
> _#on *antilink*_
> _#on *detect*_
> _#on *autosticker*_
> _#on *antiviewonce*_
> _#on *antitoxic*_
> _#on *antiarabes*_
> _#on *modoadmin*_
> _#on *antidelete*_
> _#on *public*_
> _#on *pconly*_
> _#on *gconly*_
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> _#off *antiprivado*_ 
> _#off *restrict*_
> _#off *autoread*_
> _#off *antispam*_
> _#off *anticall*_
> _#off *welcome*_
> _#off *antilink2*_
> _#off *antilink*_
> _#off *detect*_
> _#off *autosticker*_
> _#off *antiviewonce*_
> _#off *antitoxic*_
> _#off *antiarabes*_
> _#off *modoadmin*_
> _#off *antidelete*_
> _#off *public*_
> _#off *pconly*_
> _#off *gconly*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║        ⬇️ \`𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝐷𝑂𝑅\` ⬇️
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#instagram *url*_
> _#mediafire *url*_
> _#gitclone *url*_
> _#tiktok *url*_
> _#twitter *url*_
> _#fb *url*_
> _#ytshort *url*_
> _#apk *texto*_
> _#modapk *texto*_
> _#google *texto*_
> _#ytsearch *texto*_
> _#playstore *texto*_
> _#play *texto*_
> _#youtube *texto*_
> _#playlist *texto*_
> _#imagen *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║          ✨ \`𝑁𝑂 𝐶𝑂𝑀𝑀𝐴𝑁𝐷\` ✨
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _bot_
> _admins_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║       👥 \`𝐶𝑂𝑁𝐹𝐼𝐺 𝐺𝑅𝑂𝑈𝑃\` 👥
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#add *numero*_
> _#kick *responder*_
> _#kick2 *responder*_
> _#grupo *abrir*_
> _#grupo *cerrar*_
> _#promote *@tag*_
> _#demote *@tag*_
> _#link_
> _#setname *texto*_
> _#setdesc *texto*_
> _#invocar *texto*_
> _#setwelcome *texto*_
> _#setbye *texto*_
> _#hidetag *texto*_
> _#hidetag *audio*_
> _#hidetag *video*_
> _#hidetag *imagen*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║     ♻️ \`𝑀𝐸𝑁𝑈 𝐴𝐿𝐸𝐴𝑇𝑂𝑅𝐼𝑂\` ♻️
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#inspect *url grupal*_
> _#chatgpt *texto*_
> _#delchatgpt_
> _#dsowner_
> _#join *url grupal*_
> _#consejo_
> _#piropo_
> _#yoayudo *texto*_
> _#reporte *texto*_
> _#s *img*_
> _#sticker *img*_
> _#ocr *img*_
> _#hd *img*_
> _#acortar *url*_
> _#calc_
> _#del_
> _#whatmusic *audio*_
> _#traducir *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║   👑 \`𝑀𝐸𝑁𝑈 𝑃𝐴𝑅𝐴 𝑂𝑊𝑁𝐸𝑅𝑆\` 👑
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#setprefix *prefix*_
> _#resetprefix_
> _#autoadmin_
> _#addowner *@tag*_
> _#delownr *@tag*_
> _#block *@tag*_
> _#unblock *@tag*_
> _#banchat_
> _#unbanchat_
> _#resetuser *@tag*_
> _#banuser *@tag*_
> _#unbanuser *@tag*_
> _#dardiamantes *@tag*_
> _#añadirxp *@tag*_
> _#banuser *@tag*_
> _#restart_
> _#update_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║     🪙 \`𝑅𝑃𝐺 / 𝐸𝐶𝑂𝑁𝑂𝑀𝐼𝐴\` 🪙
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#cofre_
> _#balance_
> _#levelup_
> _#myns_
> _#perfil_
> _#work_
> _#minar_
> _#buy_
> _#buyall_
> _#verificar_
> _#robar *@tag*_
> _#transfer *@tag*_
> _#unreg_
╰•─────────────────•╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸⸽⃕  𝕯𝖎𝖆𝖇𝖑𝖆 - 𝕭𝖔𝖙 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('⏳');
  } catch {
    conn.reply(m.chat, '😾 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menú|help|menucompleto)$/i;
handler.register = true
export default handler;
