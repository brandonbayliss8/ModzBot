const Discord = require("discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  let status = {
    "online": "Online",
    "idle": "Idle",
    "dnd": "Do not disturb",
    "offline": "Offline/invisible"
  };
  let colors = {
    "online": "#00c903",
    "idle": "#ff9a00",
    "dnd": "#ff0000",
    "offline": "#d8d8d8"
  };
  if (!message.mentions.users.first()) return message.reply(`Please mention a user!`)
  let user = message.mentions.users.first();
  const embed = new Discord.RichEmbed()
  const now = new Date();
  const date = moment(now).format("MMM/DD/YYYY");
  const time = moment(now).format("H:mm:ss");
    embed.setColor(colors[user.presence.status])
    .addField(`Status for **${user.username}#${user.discriminator}**`, `${status[user.presence.status]}`)
    .setFooter(`Got status on ${date} at ${time}`)
    message.channel.sendEmbed(embed);
      //message.reply(`Status for **${user.username}#${user.discriminator}**: \`\`\`CSS\n${status[user.presence.status]} \`\`\``);
    }
