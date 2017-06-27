const help = require("../data/help.json");
      Discord = require('discord.js');
exports.run = (bot, message, args) => {
  if (!args[0]) {
    message.reply(`What would you like to get help with?\n*This will be canceled in 30 seconds. Options: \`all\`, \`moderation\` or \`music\`. Type \`cancel\` to cancel this command.*`).then(() => {
      message.channel.awaitMessages(m => m.author.id === message.author.id && ['all', 'moderation', 'music', 'cancel'].includes(m.content), {time: 30000, maxMatches: 1})
      .then(collected => {
      if (!collected.size) {
      return message.reply(`You didn't specify anything in time!`);
    } else if (collected.first().content.toLowerCase() === 'all') {
      message.author.send(help.helpALL);
      message.reply(`Help sent. Check your DM's!`);
    } else if (collected.first().content.toLowerCase() === 'moderation') {
      message.author.send(help.helpADMIN);
      message.reply(`Help sent. Check your DM's!`);
    } else if (collected.first().content.toLowerCase() === 'music') {
      message.author.send(help.helpMUSIC);
      message.reply(`Help sent. Check your DM's!`);
    } else if (collected.first().content.toLowerCase() === 'cancel') {
      message.reply(`Command cancelled.`);
    } else {
      message.reply("You didn't specify anything in time! Returning...");
    }
    });
    });
  } else {
    let command = args[0];
    if (command === "all") {
      message.author.send(help.helpALL);
      message.reply(`Help sent. Check your DM's!`);
    } else if (command === "moderation") {
      message.author.send(help.helpADMIN);
      message.reply(`Help sent. Check your DM's!`);
    } else if (command === "music") {
      message.author.send(help.helpMUSIC);
      message.reply(`Help sent. Check your DM's!`);
    } else if (!help[command]) {
      message.reply(`Specified command (${command}) not found!`)
    } else {
      var info;
      if (!help[command].info) {
        info = "None";
      } else {
        info = help[command].info;
      }
	    const embed = new Discord.RichEmbed();

      embed.setColor("RANDOM")
      .setTitle(`Help for ${help[command].name}`)
      .addField(`Description`, help[command].description)
	    .addField(`Usage`, "`" + "::" + help[command].usage + "`")
      .addField(`Optional info`, info)

    message.channel.send({ embed });
    }
  }
}
