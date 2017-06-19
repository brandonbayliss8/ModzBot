const Discord = require("Discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  let logs = message.guild.channels.find("name", `mod-log`);
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    message.reply("I do not have the right permissions! (Ban Members)");
    } else {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
    if (!logs) {
    let userToBan = message.mentions.users.first();
    if (!userToBan) return message.reply(`Please mention an user to ban!`)
    message.guild.member(userToBan).ban(1);
    message.reply(`banned ${message.mentions.users.first()}`);
    console.log(`${message.createdAt}: ${message.author.username} banned ${message.mentions.users.first()}`)
    } else {
      let reason = args.join(' ').replace(message.mentions.users.first(), '')
      if (!reason) {
        reason = "No reason provided";
      }
      let userToBan = message.mentions.users.first();
      if (!userToBan) return message.reply(`Please mention an user to ban!`)
      const embed = new Discord.RichEmbed()
        const now = new Date();
        const date = moment(now).format("MMM/DD/YYYY");
        const time = moment(now).format("H:mm:ss");
        embed.setColor("#ff0303")
        .addField(`User banned: `, `**${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}** (${message.mentions.users.first().id})`)
        .addField(`Reason: `, reason)
        .addField(`Banned by:`, `**${message.author.username}#${message.author.discriminator}**`)
        .setFooter(`Banned on ${date}, at ${time}`)
      message.guild.member(userToBan).ban(7);
      message.reply(`banned ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} banned ${message.mentions.users.first()}`)
      logs.send({ embed });
      }
    }
  }
}
