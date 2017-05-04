exports.run = (bot, message, args) => {
  if (args[0] < 0) return message.reply(`Please use a number between 1 and 100!`);
  if (args[0] > 100) return message.reply(`Please use a number between 1 and 100!`);
  var randomargs  = Math.floor( Math.random() * args) + 1;
  var random = Math.floor( Math.random() * 100) + 1;
  if (!args[0]) {
    message.channel.sendMessage(random)
  } else {
    message.channel.sendMessage(randomargs)
  }
}
