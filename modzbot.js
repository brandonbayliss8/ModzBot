const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

const key = require("./config.json"); //contains the prefix and bot token

bot.login("[INSERT-TOKEN-HERE]");

bot.on("ready", () => {
  console.log('I am booting faggots!')

bot.on('guildMemberAdd', member => {

    let guildid = member.guild.id;

         let guild = member.guild;
      var msg;
      msg = `Hi ${member}, welcome to ${member.guild.name}!`;
      guild.defaultChannel.sendMessage(msg);
  });
  //Leave message
  bot.on('guildMemberRemove', member => {
    let guild = member.guild;
      var msg;
      msg = `Bye ${member}!`;
      guild.defaultChannel.sendMessage(msg);
});
  bot.user.setGame(`:help :invite | In ${bot.guilds.size} Servers!`);
});

bot.on("message", (message) => {

  if (!message.content.startsWith(key.prefix)) return;

  if (message.author.bot) return;

  let command = message.content.split(" ")[0]; //splits the message to read different arguments from the user
command = command.slice(key.prefix.length); //command is the word connected to the prefix

let args = message.content.split(" ").slice(1); //the second word from the users command is stored

  if (command === "ping") {
    message.channel.sendMessage("pong and now stfu stupid human");
  } else
  if (command === "stab") {
    message.reply("al-stab, al-stab, I stabbed someone for yuo");
  } else
  if (command === "invite") {
    message.reply("Invite me! https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot")
  } else
  if (command === "status") {
    message.channel.sendMessage("Online!")
  } else
  if (command === "checkservers") {
    message.channel.sendMessage(`Currently in ${bot.guilds.size} servers!`)
  } else
  if (command === "help") {
    message.reply("Check your DM for help")
    message.author.sendMessage("The prefix for every command is a : \n\ For example: **`:help`** \n\ \n\ ```help``` shows this command \n\ ```stab``` stabs someone for you \n\ ```status``` shows the status of the bot \n\ ```ping``` the bot will react back \n\ ```invite``` will send the invite link so you can invite it to your own server \n\ ```checkservers``` shows how many servers I am currently serving \n\ ```almighty``` \"plays\" the best songs of the universe! (don't get triggered) \n\ ```userstatus``` shows the status of the message author! \n\ ```avatar``` shows your avatar \n\ ```user``` shows your Discord Username \n\ ```userid``` shows your User ID \n\ ```birth``` shows when your account was created \n\ ```serverstats``` shows stats of your server \n\ ```8ball``` Ask the 8ball! Will answer random answers back \n\ \n\ \n\ More commands coming soon...")
  } else
  if (command === "almighy") {
    message.channel.sendMessage("https://www.youtube.com/watch?v=U06jlgpMtQs \n\ https://www.youtube.com/watch?v=_Efb1DAeA34")
  } else
  if (command === "kick-notinuse") {
    return this.client.rest.methods.kickGuildMember(this.guild, this);
  } else
  if (command === "avatar") {
    message.reply(message.author.avatarURL); //sends the avatar of the user in the current channel (NOT the server username, ONLY the Discord username)
  } else
  if (command === "user") {
    message.reply(message.author.username); //sends the username of the user in the current channel
  } else
  if (command === "birth") {
    message.reply(message.author.createdAt); //sends the date and time when the user created it's account
  } else
  if (command === "userstatus") {
    message.reply(message.author.presence.status); //sends the status of the user. online: user is online - offline: user is offline or invisible - idle: user is AFK - dnd: user is in Do not Disturb
  } else
  if (command === "userid") {
    message.reply(message.author.id); //sends the userID of the user
  } else
  if (command === "usergame") {
    if (message.author.presence.game !== null) {
      message.reply("you are playing " + message.author.presence.game.name) // do some shit
    } else {
      message.reply("you have a life omg you are playing nothing")// call them a cunt
    }
} else // next command
  if (command === "serverstats") {
    message.channel.sendMessage(message.guild.iconURL); //server icon
    message.channel.sendMessage("Name: " + message.guild.name); //server name
    message.channel.sendMessage("Owner: " + message.guild.owner); //server owner
    message.channel.sendMessage("Region: " + message.guild.region); //server region
    message.channel.sendMessage("Roles: " + message.guild.roles.Role); //server roles
    message.channel.sendMessage("Channels: " + message.guild.channels.GuildChannel); //server channels
    message.channel.sendMessage("Members: " + message.guild.memberCount); //server member count
    message.channel.sendMessage("Created at: " + message.guild.createdAt); //server creation date
    message.channel.sendMessage("Default Channel: " + message.guild.defaultChannel); //default channel of the server
    message.channel.sendMessage("Server ID: " + message.guild.id); //server ID
  } else
  var answ = ["Yes", "No", "Why?", "Stfu human", "Let's find it out!", "Maybe", "I don't know mate", "Jesus why u asking such difficult questions", "Okay RIP me", "Are you fucking serious", "Get the fuck out!"];
  if (command === "8ball") {
    message.channel.sendMessage(answ[Math.floor(Math.random() * answ.length)]);
  }
});
