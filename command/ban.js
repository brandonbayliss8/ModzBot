const Discord = require("Discord.js");
exports.run = (bot, message, args) => {
  if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to ban someone in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    message.reply("I do not have the right permissions! (Ban Members)");
    } else {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
      let userToBan = message.mentions.users.first();
      const embed = new Discord.RichEmbed()
        embed.setColor('#CE0000')
        .setTitle(`Admin log` , `From ${message.guild.name}`)
        .setDescription(`**${message.author.username}** banned **` + userToBan + `** from **${message.guild.name}**`)
        .setFooter(`Generated on ${message.createdAt}`)
      message.guild.member(userToBan).ban(7);
      message.reply(`banned ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} banned ${message.mentions.users.first()}`)
      bot.channels.get("305057972755759104").sendEmbed(embed);
      }
    }
  }
}
