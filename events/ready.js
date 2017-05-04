exports.run = (bot) => {
  console.log(`${bot.readyAt}: Ready to serve ${bot.guilds.size} servers!`)
  bot.user.setGame(`::help ::about | In ${bot.guilds.size} Servers!`);
  }
