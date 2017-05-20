exports.run = (bot, message, args, devs) => {
  //This command is for debug purposes
  if(message.author.id != "264331473308483584") return message.reply(`You don\'t have permission to do that!`);
  let name = message.guild.id;
  console.log(`${bot.guilds.get(name).roles.map(r => r.name).join(", ")}`)
  console.log(`${bot.guilds.get(name).roles.map(r => r.id).join(", ")}`)
  message.reply(`${bot.guilds.get(name).roles.map(r => r.name).join(", ")}`)
  message.reply(`${bot.guilds.get(name).roles.map(r => r.id).join(", ")}`)
}
