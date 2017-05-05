const Discord = require("discord.js");
exports.run = (bot, member) => {

      let guildid = member.guild.id;

           let guild = member.guild;
           const embed = new Discord.RichEmbed()
             embed.setColor('#00CE00')
             .setAuthor(`Join log`)
             .setDescription(`**${member}** joined **${guild}**`)

        var msg;
        msg = `Hi ${member}, welcome to ${member.guild.name}!`;
        guild.defaultChannel.sendMessage(msg);
        console.log(`${member} joined ${member.guild.name}`)
        //bot.channels.get("305057938567987200").sendEmbed(embed);
    }
