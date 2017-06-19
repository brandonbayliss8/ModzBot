const Discord = require("discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  let logs = message.guild.channels.find("name", `mod-log`);

    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    message.reply("I do not have the right permissions! (Kick Members)");
    } else {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
    if (!logs) {
      let userToKick = message.mentions.users.first();
      if (!userToKick) return message.reply(`Please mention an user to kick!`)
      message.guild.member(userToKick).kick();
      message.reply(`kicked ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} kicked ${message.mentions.users.first()}`)
      } else {
      let reason = args.join(' ').replace(message.mentions.users.first(), '')
      if (!reason) {
        reason = "No reason provided";
      }
      const embed = new Discord.RichEmbed
      const now = new Date();
      const date = moment(now).format("MMM/DD/YYYY");
      const time = moment(now).format("H:mm:ss");
      embed.setColor("#ff7503")
      .addField(`User kicked: `, `**${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}** (${message.mentions.users.first().id})`)
      .addField(`Reason: `, reason)
      .addField(`Kicked by:`, `**${message.author.username}#${message.author.discriminator}**`)
      .setFooter(`Kicked on ${date}, at ${time}`)

      let userToKick = message.mentions.users.first();
      if (!userToKick) return message.reply(`Please mention a user to kick!`)
      message.guild.member(userToKick).kick();
      message.reply(`kicked ${message.mentions.users.first()}`);
      logs.send({ embed });
      console.log(`${message.createdAt}: ${message.author.username} kicked ${message.mentions.users.first()}`)
      }
    }
  }
}
