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
  var user;
  if (!message.mentions.users.first()) {
    user = message.author;
  } else {
    user = message.mentions.users.first();
  };
      const embed = new Discord.RichEmbed()
        embed.setColor("RANDOM")
        .setAuthor(`${user.username}`, user.avatarURL)
        .setTitle(`${user.username}` , "Information about this user!")
        .setDescription(`Information about ${user.username}`)
        .setThumbnail(user.avatarURL)
        .addField(`• Username`, `${user.username}#${user.discriminator}`, true)
        .addField(`• Account created`, `${moment(user.createdAt).format('DD MMMM YYYY')}`, true)
        .addField(`• Status`, status[user.presence.status], true)
        .addField(`• User ID`, `${user.id}`, true)
        .addField(`• Bot?`, botuser[user.bot], true)
        .addField(`• Server joined`, `${moment(message.guild.member(user).joinedAt).format('DD MMMM YYYY')}`, true)
        .addField(`• Nickname`, message.guild.member(user).nickname != null ? message.guild.member(user).nickname : "No nickname", true)
        .addField(`• Game playing`, user.presence.game != null ? user.presence.game.name : "Nothing", true)
        .setFooter(`Generated on ${date}, at ${time}`)

        message.channel.send({ embed });

        console.log(`${message.createdAt}: ${user.username} requested userinfo about ${user.username}`);
}
