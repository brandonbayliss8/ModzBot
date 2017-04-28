const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to get serverinfo in a DM channel`) //console error message
    } else { //continue with Serverstats
      let name = message.guild.id;
      const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        .setAuthor(`${bot.guilds.get(name).name}`, bot.guilds.get(name).iconURL)
        .setTitle(`${bot.guilds.get(name).name}` , "Server Info")
        .setDescription(`Information about this server`)
        .setThumbnail(bot.guilds.get(name).iconURL)
        .addField(`• Server ID`, name, true)
        .addField(`• Server Owner`, `${bot.guilds.get(name).owner}`, true)
        .addField(`• Server Region`, `${bot.guilds.get(name).region}`, true)
        .addField(`• Created On`, `${bot.guilds.get(name).createdAt}`, true)
        .addField(`• Members`, `${bot.guilds.get(name).memberCount}`, true)
        .addField(`• Default Channel`, `${bot.guilds.get(name).defaultChannel}`, true)
        .addField(`• Channels`, `${bot.guilds.get(name).channels.map(c => c.name).join(", ")}`)
        .addField(`• Roles`, `${bot.guilds.get(name).roles.map(r => r.name).join(", ")}`)
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);
        console.log(`${message.createdAt}: ${message.author.username} requested serverinfo about ${bot.guilds.get(message.guild.id).name}`)
    }
}
