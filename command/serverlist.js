exports.run = (bot, message) => {
  message.channel.send(`Here is a list of servers where I am currently in! \n\`\`\`CSS\n${bot.guilds.filter(g => g.name < 50).join(" \n")}\`\`\``); //add a filter to make sure the message doesnt break the char limit, that number is random
}
