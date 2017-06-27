const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = (bot, message, args) => {
  const embed = new Discord.RichEmbed()
         const now = new Date();
         const date = moment(now).format("MMM/DD/YYYY");
         const time = moment(now).format("H:mm:ss");
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        var quotes = ['modzon sux!', 'omg Brem Djenzzen uses hax!', 'modz hab more subs then pewdiepoop!', 'I luv yuo!']
        const randomNumber = Math.floor(Math.random() * (quotes.length));
      embed.setColor("RANDOM")
      .setAuthor(`ModzBot Stats`, `http://kuuv.io/i/d035x2P.jpg`)
      .setTitle(`ModzBot Stats`)
      .setDescription(`${quotes[randomNumber]}`)
      .setThumbnail(`http://kuuv.io/i/d035x2P.jpg`)
      .addField(`Lib`, `Discord.js (Javascript)`, true)
      .addField(`Version`, `1.2.5`, true)
      .addField(`Uptime`, `${duration}`, true)
      .addField(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(`Users`, `${bot.users.size.toLocaleString()}`, true)
      .addField(`Servers`, `${bot.guilds.size.toLocaleString()}`, true)
      .addField(`Channels`, `${bot.channels.size.toLocaleString()}`, true)
      .addField(`Voice connections`, `${bot.voiceConnections.size}`, true)
      .setFooter(`${quotes[randomNumber]} Generated on ${date} at ${time}`)

      message.channel.send({ embed });

      console.log(`${message.createdAt}: ${message.author.username} requested stats about me`)
}
