exports.run = (bot, message) => {
  message.channel.send(`Here is a list of servers where I am currently in! \n\`\`\`CSS\n${bot.guilds.map(g => g.name).join(" \n")}\`\`\``);
}
