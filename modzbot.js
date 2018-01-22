const Discord = require("discord.js");
      bot = new Discord.Client();
      yt = require('ytdl-core');
      YouTube = require("youtube-node");
      moment = require("moment");
      streamOptions = { seek: 0, volume: 1 };
      config = require("./config.json"); //contains the prefix and bot token
      fs = require("fs");
      devs = "206037786808156160"
      prefix = ":!";
      TOKEN = "NDA0OTcxNDc2NDU0NzM1ODcy.DUdmsQ.t-vjhNyqzY_IeTAT_ORMRN2cKyI";

// Load the contents of the `/events/` folder and each file in it.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    const now = new Date();
    const date = moment(now).format("MMM/DD/YYYY");
    const time = moment(now).format("H:mm:ss");
    console.log(`${time}: Loading event ${eventName}...`);
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    const updated = new Date();
    const updatetime = moment(updated).format("H:mm:ss");
    console.log(`${updatetime}: Event ${eventName} loaded!`);
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
    cmd.run(bot, message, args, devs);
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

bot.login("NDA0OTcxNDc2NDU0NzM1ODcy.DUdmsQ.t-vjhNyqzY_IeTAT_ORMRN2cKyI");

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
