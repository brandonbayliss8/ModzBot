const { RichEmbed } = require("discord.js");
const moment = require("moment");
exports.run = (bot, member) => {
  const guild = member.guild;
    
  const embed = new RichEmbed()
       .setColor('#00CE00')
       .setAuthor('Join log')
       .setDescription(`**${member}** joined **${guild}**`);

  let msg = `Hi ${member}, welcome to ${member.guild.name}!`;
  if (guild.id === "110373943822540800") return console.log(`Disabled in ${guild}`);
  const now = new Date();
  const date = moment(now).format("DD/MMM/YYYY");
  const time = moment(now).format("H:mm:ss");
  guild.defaultChannel.send(msg);
  console.log(`${date}, ${time}: ${member} joined ${member.guild.name}`);
  //bot.channels.get("305057938567987200").sendEmbed(embed);
}
