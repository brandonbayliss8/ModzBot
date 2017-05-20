const Discord = require("discord.js");
      bot = new Discord.Client();
      ytdl = require('ytdl-core');
      moment = require("moment");
      streamOptions = { seek: 0, volume: 1 };
      config = require("./config.json"); //contains the prefix and bot token
      fs = require("fs");
      devs = "264331473308483584"
      prefix = ":";
      TOKEN = process.env.TOKEN;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on("message", message => {
  if (message.channel.type === "dm") return; //ignore dm's

  if (message.author.bot) return; //ignore bot users

  if (!message.content.startsWith(config.prefix)) return; //ignore messages without prefix

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:

  try {
    let cmd = require(`./command/${command}.js`);
    cmd.run(bot, message, args);
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

bot.login(process.env.Token);

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
