import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/de51efdf29f279152024f.jpg'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 20K
┊• *Permanen:* 50K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Bulan:* 10K
╰═┅═━––––––๑

*PAYMENT:*

• *Ovo:* [${povo}]
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: pay }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main','info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
