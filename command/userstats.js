const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  if (message.mentions.users.first() === undefined) {
      const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle(`${message.author.username}` , "Information about this user!")
        .setDescription(`Information about ${message.author.username}`)
        .setThumbnail(message.author.avatarURL)
        .addField(`• Username`, `${message.author.username}`, true)
        .addField(`• Account created`, `${message.author.createdAt}`, true)
        .addField(`• Status`, `${message.author.presence.status}`, true)
        .addField(`• User ID`, `${message.author.id}`, true)
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);

        console.log(`${message.createdAt}: ${message.author.username} requested userinfo about ${message.author.username}`)
    } else {
      const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        .setAuthor(`${message.mentions.users.first().username}`, message.mentions.users.first().avatarURL)
        .setTitle(`${message.mentions.users.first().username}` , "Information about this user!")
        .setDescription(`Information about ${message.mentions.users.first().username}`)
        .setThumbnail(message.mentions.users.first().avatarURL)
        .addField(`• Username`, `${message.mentions.users.first().username}`, true)
        .addField(`• Account created`, `${message.mentions.users.first().createdAt}`, true)
        .addField(`• Status`, `${message.mentions.users.first().presence.status}`, true)
        .addField(`• User ID`, `${message.mentions.users.first().id}`, true)
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);

        console.log(`${message.createdAt}: ${message.author.username} requested userinfo about ${message.mentions.users.first().username}`)
    }
}
