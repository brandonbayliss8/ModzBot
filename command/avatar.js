const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  let img = message.mentions.users.first()
  if (!args[0]) return message.reply(`Please mention a user!`);
  if (!img) return message.reply(`Please mention a valid user!`);
  if (img.avatarURL === null) {
    message.channel.sendMessage("The mentioned user (" + img + ") does not have an avatar!")
  } else {
  const embed = new Discord.RichEmbed()
  .setImage(`${img.avatarURL}`)
  .setFooter(`Avatar of ${img.username}#${img.discriminator} requested by ${message.author.username}#${message.author.discriminator}`)

  message.channel.sendEmbed(embed);
  }
}
