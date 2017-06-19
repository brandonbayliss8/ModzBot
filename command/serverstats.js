const Discord = require("discord.js");
exports.run = (bot, message, args) => {
      let name = message.guild.id;
      const embed = new Discord.RichEmbed()
      let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };

      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
        embed.setColor(3447003)
        .setAuthor(`${bot.guilds.get(name).name}`, bot.guilds.get(name).iconURL)
        .setTitle(`${bot.guilds.get(name).name}` , "Server Info")
        .setDescription(`Information about this server`)
        .setThumbnail(bot.guilds.get(name).iconURL)
        .addField(`• Server ID`, name, true)
        .addField(`• Server Owner`, `${bot.guilds.get(name).owner}`, true)
        .addField(`• Server Region`, region[message.guild.region], true)
        .addField(`• Verification Levels`, verifLevels[message.guild.verificationLevel], true)
        .addField(`• Created On`, `${bot.guilds.get(name).createdAt}`, true)
        .addField(`• Members`, `${bot.guilds.get(name).memberCount}`, true)
        .addField(`• Default Channel`, `${bot.guilds.get(name).defaultChannel}`, true)
        .addField(`• Channels`, `${bot.guilds.get(name).channels.map(c => c.name).join(", ")}`)
        .addField(`• Roles`, `${bot.guilds.get(name).roles.map(r => r.name).join(", ")}`)
        .addField(`• Emojis`, `${emojis}`)
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.send({ embed });
        console.log(`${message.createdAt}: ${message.author.username} requested serverinfo about ${bot.guilds.get(message.guild.id).name}`)
}
