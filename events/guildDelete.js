exports.run = (bot, guild) => {
  let toSend = `I've been removed from **${guild.name}**
Guild ID: **${guild.id}**
Guild Member Count: **${guild.memberCount}**
Guild Region: **${guild.region}**`;

  bot.channels.get("305383689464971264").send(toSend);
  bot.user.setGame(`::help ::about | In ${bot.guilds.size} servers!`);
  console.log(`I've been removed from ${guild.name}`);
  }
