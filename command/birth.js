const moment = require('moment')
exports.run = (bot, message, args) => {
  message.reply(`Your account was created on ${moment(message.author.createdAt).format("DD MMMM YYYY")}`); //sends the date and time when the user created it's account
}
