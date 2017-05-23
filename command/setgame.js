exports.run = (bot, message, args) => {
  if (message.author.id !== "264331473308483584") return message.reply("You do not have the permissions to do that!");
  let game = args.join(' ');
  if (game.includes('{size}')) {
      let setgame = game.replace("{size}", bot.guilds.size);
      bot.user.setGame(`${setgame}`);
      message.channel.sendMessage(`Game set to **${setgame}**!`);
      } else {
      bot.user.setGame(`${game}`);
      message.channel.sendMessage(`Game set to **${game}**!`);
  }
}
