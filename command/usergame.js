exports.run = (bot, message, args) => {
  if (message.author.presence.game !== null) {
    message.reply("you are playing " + message.author.presence.game.name) // do some shit
  } else {
    message.reply("you have a life omg you are playing nothing")// call them a cunt
  }
}
