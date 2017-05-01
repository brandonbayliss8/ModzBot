const Discord = require("Discord.js");
exports.run = (bot, message, args) => {
  if(message.author.id != "264331473308483584") {
      message.reply(`You don\'t have permission to do that!`)
      console.log(`${message.createdAt}: ${message.author.username} tried to use the announcement command`)
    } else {
    var announcement = args.join(" ")
    console.log(`${message.createdAt}: Announcement from the ModzBot developer: ` + announcement);
    bot.guilds.forEach(guild => { guild.defaultChannel.sendMessage(announcement) });
  }
}
