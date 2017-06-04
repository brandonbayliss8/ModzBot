const Discord = require("discord.js");
exports.run = (bot, message, args) => {
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
      message.reply("Error: I miss the right permissions to do that! (Manage messages)");
    } else {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.reply("Error: You miss the right permissions to do that!");
    } else {
      let messagecount = parseInt(args[0]) + 1; //args are the message count
      message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
      message.channel.sendMessage(`:white_check_mark: Messages cleaned!`).then(message => message.delete(5000));
      console.log(`${message.createdAt}: ${message.author.username} used the clear command in ${bot.guilds.get(message.guild.id).name}`);
      }
    }
  }
