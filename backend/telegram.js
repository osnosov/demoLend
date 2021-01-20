const axios = require('axios')

const token = process.env.TELEGRAM_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID
const siteName = process.env.SITE_NAME

const contactMessageTelegramMessageAdmin = async ({ lang, phone, name, email, message }) => {
  try {
    const date = new Date().toLocaleString('uk-UA')

    let text = `${siteName}\nlang ${lang}\n${date}\nContact Message: [${phone}](tel:${phone})\n${name}\n${email}\n${message}`

    const { status, data } = await axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
      params: {
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      }
    })
  } catch (err) {
    console.log('services telegram contact message err', err)
  }
}

module.exports = {
  contactMessageTelegramMessageAdmin
}
