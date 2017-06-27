const fs = require("fs");
      moment = require("moment");
      data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8')),
      now = new Date();
      date = moment(now).format("MMM/DD/YYYY");
      time = moment(now).format("H:mm:ss");
exports.run = (bot, message, args) => {
  if (!args[0]) return;
  let command = args[0].toLowerCase();
  args = args.join(" ").substring(command.length + 1);
  if (command === "welcome") {
    /*if (!data[message.guild.id]) {data[message.guild.id] = {
        welcomemessage: "enabled"
      };
    } else {
      data[message.guild.id].welcomemessage = "enabled";
    }
      fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
        if (err) console.error(err)
      });
      message.channel.send("Welcome message enabled!");*/
    message.reply(`This command is currently disabled.`);
    }
  if (command === "logs")
  message.reply(`Would you like to enable the logs?\n*This will be canceled in 10 seconds. Type \`yes\` or \`no\`.*`).then(() => {
    message.channel.awaitMessages(m => m.author.id === message.author.id && ['yes', 'no'].includes(m.content), {time: 10000, maxMatches: 1})
    .then(collected => {
    if (!collected.size) {
    return message.reply(`You didn't say \`yes\` or \`no\` in time!`);
  } else if (collected.first().content.toLowerCase() === 'yes') {
    message.channel.send(`Creating the log channel...`);
    console.log(`${date} at ${time}: ${message.author.username} enabled the logs in ${message.guild.name}.`);
    message.guild.createChannel("mod-log", "text")
      .then(log => {
            setTimeout(() => {
                let everyone = message.guild.id;
                log.sendMessage("You have enabled the moderator logs. To disable this, use the `::disable logs` command.");
                log.overwritePermissions(`${everyone}`, {
                SEND_MESSAGES: false
                })
                log.overwritePermissions(bot.user.id, {
                SEND_MESSAGES: true
                })
            }, 2500);
        }).catch(e => {
          message.channel.send(":no_entry_sign: There was an error! Report this please:\n\n" + e);
        });
    message.reply(`Log channel created!`)
  } else if (collected.first().content.toLowerCase() === 'no') {
    message.channel.send("Returning...");
  } else {
    message.reply("You didn't say `yes` or `no`. Returning...");
  }
  });
  });
  }
