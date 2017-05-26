const Discord = require("discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  const now = new Date();
  const date = moment(now).format("MMM/DD/YYYY");
  const time = moment(now).format("H:mm:ss");
  let status = {
    "online": "Online",
    "idle": "Idle",
    "dnd": "Do not disturb",
    "offline": "Offline/invisible"
  };
  let botuser = {
    "false": "No",
    "true": "Yes"
  };
  let nick = {
    "null" : "No nickname"
  };
      const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle(`${message.author.username}` , "Information about this user!")
        .setDescription(`Information about ${message.author.username}`)
        .setThumbnail(message.author.avatarURL)
        .addField(`• Username`, `${message.author.username}#${message.author.discriminator}`, true)
        .addField(`• Account created`, `${moment(message.author.createdAt).format('DD MMMM YYYY')}`, true)
        .addField(`• Status`, status[message.author.presence.status], true)
        .addField(`• User ID`, `${message.author.id}`, true)
        .addField(`• Bot?`, botuser[message.author.bot], true)
        .addField(`• Server joined`, `${moment(message.member.joinedAt).format('DD MMMM YYYY')}`, true)
        .addField(`• Nickname`, message.member.nickname != null ? message.member.nickname : "No nickname", true)
        .addField(`• Game playing`, message.author.presence.game != null ? message.author.presence.game.name : "Nothing", true)
        .setFooter(`Generated on ${date}, at ${time}`)

        message.channel.sendEmbed(embed);

        console.log(`${message.createdAt}: ${message.author.username} requested userinfo about ${message.author.username}`);
}
