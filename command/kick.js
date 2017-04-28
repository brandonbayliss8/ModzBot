const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  if (message.guild === null) { //DM channel
    message.reply("Go into a server instead and try it again there!") //error message
    console.log(`${message.createdAt}: ${message.author.username} tried to kick someone in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    message.reply("I do not have the right permissions! (Kick Members)");
    } else {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
      let userToKick = message.mentions.users.first();
      message.guild.member(userToKick).kick();
      message.reply(`kicked ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} kicked ${message.mentions.users.first()}`)
      }
    }
  }
}
