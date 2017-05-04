const help = require("../data/helpmsg.json");
exports.run = (bot, message, args) => {
  message.author.sendMessage(help.helpmsg1);
          setTimeout(() => {
              message.author.sendMessage(help.helpmsg2);
          }, 250);
          setTimeout(() => {
              message.author.sendMessage(help.helpmsg3);
          }, 500);
          message.reply(`Check your DMs for help!`);
  }
