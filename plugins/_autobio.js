
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `📆 "+new Date().toLocaleDateString()+" ⌚ "+new Date().toLocaleTimeString()+"  _(👑💝ᴀɴᴋɪᴛᴀ👸💫🌸) আপনার সাথে প্রতিদিন ঝগড়া করব,দরকার পড়লে মারামারিও করব কিন্তু আপনাকে ছেড়ে যাবো না..!!💝🌸|𝑅𝒜𝐻𝒰𝐿 ෆ 𝒜𝒩𝒦𝐼𝒯𝒜💝👑💫`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Day(s) ️', h, ' Hour(s) ', m, ' Minute(s)'].map(v => v.toString().padStart(2, 0)).join('')
}
