exports.run = (bot, guild) => {
  let toSend = `I've been invited to **${guild.name}**
Guild ID: **${guild.id}**
Guild Member Count: **${guild.memberCount}**
Guild Region: **${guild.region}**`;

  let welcome = `:wave: I'm ModzBot!
An interactive bot for your Discord server!
Type, \`::help\` for a list of commands!
If you have any questions, please join my Discord server, by typing, \`::support\`.
Thanks for using me in your server!`;

  bot.channels.get("305383689464971264").send(toSend);
  console.log(`I\'ve been added to ` + guild.name + `.`);
  guild.defaultChannel.send(welcome);
  bot.user.setGame(`::help ::about | In ${bot.guilds.size} servers!`);
}
