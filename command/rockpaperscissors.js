exports.run = (bot, message, args) => {
  var rps = ["Rock", "Paper", "Scissors"]
    message.reply(rps[Math.floor(Math.random() * rps.length)] + "!");
}
