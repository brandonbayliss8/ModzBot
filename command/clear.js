exports.run = (bot, message, args) => {
  if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to clear messages in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
      message.reply("Error: I miss the right permissions to do that! (Manage messages)");
    } else {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.reply("Error: You miss the right permissions to do that!");
    } else {
      let messagecount = parseInt(args[0]); //args are the message count
      message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
      console.log(`${message.createdAt}: ${message.author.username} used the clear command in ${bot.guilds.get(message.guild.id).name}`)
      }
    }
  }
}
