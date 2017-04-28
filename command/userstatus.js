exports.run = (bot, message, args) => {
  message.reply(message.author.presence.status);
}
