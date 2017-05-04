const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = (bot, message, args) => {
  const embed = new Discord.RichEmbed()
         const now = new Date();
         const date = moment(now).format("MMM/DD/YYYY");
         const time = moment(now).format("H:mm:ss");
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        var quotes = ['send modznoob a joke!', 'omg I am working?!', 'cut ya hands off! jk', 'I luv yuo']
        const randomNumber = Math.floor(Math.random() * (quotes.length));
      embed.setColor(3447003)
      .setAuthor(`ModzBot`, `http://kuuv.io/i/d035x2P.jpg`)
      .setTitle(`Information about ModzBot!`)
      .setDescription(`am the gr8 bot!`)
      .setThumbnail(`http://kuuv.io/i/d035x2P.jpg`)
      .addField(`What am I`, `I am a bot for Discord. I am currently in development.`, true)
      .addField(`Who made me?`, `My developer is **ModzOn#8775**.`, true)
      .addField(`Features!`, `I can welcome people in your server! You can ask me questions, moderate your server with me and more!`, true)
      .addField(`My website`, `My website, with more information about me and my developer: http://modzon.weebly.com.`, true)
      .addField(`Commands`, `For a list of all the commands, use the \`::help\` command! A command list can also be found on my site.`, true)
      .addField(`Servers`, `I am currently in ${bot.guilds.size} servers!`, true)
      .addField(`Bot version`, `Version 1.2.1`, true)
      .setFooter(`${quotes[randomNumber]} Generated on ${date} at ${time}`)

      message.channel.sendEmbed(embed);

      console.log(`${message.createdAt}: ${message.author.username} requested info about me`)
}
