const help = require("../data/helpmsg.json");
exports.run = (bot, message, args) => {
  message.author.send(help.helpmsg1);
          setTimeout(() => {
              message.author.send(help.helpmsg2);
          }, 250);
          setTimeout(() => {
              message.author.send(help.helpmsg3);
          }, 500);
          message.reply(`Check your DMs for help!`);
  }
