let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/de51efdf29f279152024f.jpg'
let sewa = `
╭──「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 15K
┊• *Permanen:* 50K
┠──「 *PREMIUM* 」
┊• *1 Bulan:* 10K
╰────────────๑
┌─「 *Donasi & Payment* 」
│ • *Dana:* [${global.pdana}]
│ • *Ovo:* [${global.povo}]
│ • *Gopay:* [${global.pgopay}]
│ • *Saweria:* [${global.psaweria}]
│ • *Trakteer:* [${global.ptrakterr}]
❏──────────────๑
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi|sewa|prem|premium$/i

export default handler
