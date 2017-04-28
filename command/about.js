const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  const embed = new Discord.RichEmbed()
      embed.setColor(3447003)
      .setAuthor(`ModzBot`, `http://kuuv.io/i/d035x2P.jpg`)
      .setTitle(`Information about ModzBot!`)
      .setDescription(`am the gr8 bot!`)
      .setThumbnail(`http://kuuv.io/i/d035x2P.jpg`)
      .addField(`What am I`, `I am a bot for Discord. I am currently in development. This bot can do many things.`)
      .addField(`Features!`, `I can welcome people in your server! You can ask me questions, let me play music and more!`)
      .addField(`My website`, `My website, with more information about me and my developer: http://modzon.weebly.com.`)
      .addField(`Commands`, `For a list of all the commands, use the \`help\` command! A command list can also be found on my site.`)
      .addField(`Servers`, `I am currently in ${bot.guilds.size} servers!`)
      .addField(`Bot version`, `Version 1.0.0`)
      .setFooter(`send modznoob a joke! Generated on ${message.createdAt}`)

      message.channel.sendEmbed(embed);

      console.log(`${message.createdAt}: ${message.author.username} requested info about me`)
}
