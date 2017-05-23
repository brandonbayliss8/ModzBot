const Discord = require("discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  //message.reply("Invite me! https://discordapp.com/oauth2/authorize?client_id=307422938234355713&scope=bot&permissions=66321471") //only for beta bot
  const embed = new Discord.RichEmbed
  const now = new Date();
  const date = moment(now).format("MMM/DD/YYYY");
  const time = moment(now).format("H:mm:ss");
  embed.setColor(3447003)
  .setAuthor(`Click here to invite ModzBot to your server!`)
  .setURL(`https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot&permissions=2146958591`)
  .setFooter(`Invite link requested by ${message.author.username} | Generated on ${date}, at ${time}`)

  message.channel.sendEmbed(embed);
}
