const moment = require("moment");
      now = new Date();
      date = moment(now).format("MMM/DD/YYYY");
      time = moment(now).format("H:mm:ss");
exports.run = (bot, message, args) => {
  if (!args[0]) return;
  let command = args[0].toLowerCase();
  args = args.join(" ").substring(command.length + 1);
  if (command === "logs")
  message.reply(`Would you like to enable the logs?\n*This will be canceled in 10 seconds. Type \`yes\` or \`no\`.*`).then(() => {
    message.channel.awaitMessages(m => m.author.id === message.author.id && ['yes', 'no'].includes(m.content), {time: 10000, maxMatches: 1})
    .then(collected => {
    if (!collected.size) {
    return;
  } else if (collected.first().content.toLowerCase() === 'yes') {
    message.channel.sendMessage(`Creating the log channel...`);
    console.log(`${date} at ${time}: ${message.author.username} enabled the logs in ${message.guild.name}.`);
    message.guild.createChannel("mod-log", "text")
      .then(log => {
            setTimeout(() => {
                let everyone = message.guild.roles.get(`297442085861064705`);
                log.sendMessage("You have enabled the moderator logs.");
                log.overwritePermissions(`297442085861064705`, {
                SEND_MESSAGES: false
                })
            }, 2500);
        }).catch(e => {
          message.channel.sendMessage(":no_entry_sign: There was an error! Report this please:\n\n" + e);
        });
    message.reply(`Log channel created!`)
  } else if (collected.first().content.toLowerCase() === 'no') {
    message.channel.sendMessage("Returning...");
  } else {
    message.reply("You didn't say `yes` or `no`. Returning...");
  }
  });
  });
  }
