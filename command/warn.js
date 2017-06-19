const Discord = require("discord.js");
      moment = require("moment");
exports.run = (bot, message, args) => {
  let warned = message.mentions.users.first();
  let admin = message.member.hasPermission("KICK_MEMBERS")
  let log = message.guild.channels.find("name", `mod-log`);
  var reason;
  if (!args.join(' ').replace(message.mentions.users.first(), '')) {
    reason = 'No reason provided';
  } else {
    reason = args.join(' ').replace(message.mentions.users.first(), '');
  }
  if (!log) {
    message.reply(`:no_entry_sign: You haven't enabled the logs! Please enable the logs by \`::enable logs\`.`)
  }else {
  if (message.mentions.users.size === 0) return message.reply(":no_entry_sign: Please mention a user to warn.");
  if (!admin) return message.reply(`:no_entry_sign: You do not have permission to run this command!`);
  if (!warned) return message.reply(":no_entry_sign: Please mention a user to warn.");
  if (!args.join(' ')) return message.reply(":no_entry_sign: Please mention a reason.");
  const embed = new Discord.RichEmbed()
    const now = new Date();
    const date = moment(now).format("MMM/DD/YYYY");
    const time = moment(now).format("H:mm:ss");
    embed.setColor("#ffce03")
    .addField(`User warned: `, `**${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}** (${message.mentions.users.first().id})`)
    .addField(`Reason: `, reason)
    .addField(`Warned by:`, `**${message.author.username}#${message.author.discriminator}**`)
    .setFooter(`Warned on ${date}, at ${time}`)

  log.send({ embed });
  message.reply(`User (**${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}**) warned!`)
  }
}
