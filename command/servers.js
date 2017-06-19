exports.run = (bot, message) => {
  message.channel.send(`I am currently in **${bot.guilds.size.toLocaleString()}** servers, with a total of **${bot.channels.size.toLocaleString()}** channels and **${bot.users.size.toLocaleString()}** users!`);
}
