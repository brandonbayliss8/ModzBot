exports.run = (bot, message, args) => {
  var comm = ["\`::rockpaperscissors\`", "\`::8ball <question>\`", "\`::stab\`", "\`::about\`", "\`::usergame\`"]
    message.reply("Here is a command for you!" + comm[Math.floor(Math.random() * comm.length)]);
}
