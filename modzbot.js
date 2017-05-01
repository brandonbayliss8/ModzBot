const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const moment = require("moment");
const streamOptions = { seek: 0, volume: 1 };
const config = require("./config.json"); //contains the prefix and bot token
const fs = require("fs");

const now = new Date();
 const date = moment(now).format("MMM/DD/YYYY"); //month date and year.
const time = moment(now).format("H:mm:ss");

const TOKEN = process.env.TOKEN;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.commandInhibitors = new Discord.Collection();
bot.functions = {};
const prefix = ":";
// Load the contents of the `/command/` folder and each file in it.
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

bot.on("ready", () => {
  console.log(`${bot.readyAt}: Ready to serve ${bot.guilds.size} servers!`)
  bot.user.setGame(`::help ::about | In ${bot.guilds.size} Servers!`);
});

bot.on('guildCreate', Guild => {

  let toSend = [
 "I've been invited to " + "\**" + Guild.name + "\**",
  "Guild ID: " + "\**" + Guild.id + "\**",
  "Guild Members Count: " + "\**" + Guild.memberCount + "\**",
  "Guild Region: " + "\**" + Guild.region + "\**"
];

  let welcome = [
 "Hello! I am **ModzBot**!",
  "Thank you for adding me on your server!",
  "For a list of commands, use the command \`::help\`.",
  "If you need info about me, use the \`::about\` command."
];

bot.channels.get("305383689464971264").sendMessage(toSend);
console.log(`I\'ve been added to ` + Guild.name + `.`);
});
bot.on('guildDelete', Guild => {
  let toSend = [
    "I've been removed from " + "\**" + Guild.name + "\**",
    "Guild ID: " + "\**" + Guild.id + "\**",
"Guild Members Count: " + "\**" + Guild.memberCount + "\**",
  "Guild Region: " + "\**" + Guild.region + "\**"
];

bot.channels.get("305383689464971264").sendMessage(toSend);
});
bot.on('guildMemberAdd', member => {

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
  });
  //Leave message
  bot.on('guildMemberRemove', member => {
    let guild = member.guild;
    const embed = new Discord.RichEmbed()
      embed.setColor('#CE0000')
      .setAuthor(`Join log`)
      .setDescription(`**${member}** left **${guild}**`)

    var msg;
    msg = `Bye ${member}!`;
    guild.defaultChannel.sendMessage(msg);
    console.log(`${member} left ${member.guild.name}`)
    //bot.channels.get("305057938567987200").sendEmbed(embed);
});

bot.login(process.env.Token);

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
