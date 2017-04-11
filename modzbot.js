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
    message.reply("Invite me! https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot&permissions=66321471")
  } else
  if (command === "status") {
    message.channel.sendMessage("Online!")
  } else
  if (command === "checkservers") {
    message.channel.sendMessage(`Currently in ${bot.guilds.size} servers!`)
  } else
  if (command === "help") {
    message.reply("Check your DM for help")
    message.author.sendMessage("The prefix for every command is a : \n\ For example: **`:help`** \n\ \n\ ```help``` shows this command \n\ ```stab``` stabs someone for you \n\ ```status``` shows the status of the bot \n\ ```ping``` the bot will react back \n\ ```invite``` will send the invite link so you can invite it to your own server \n\ ```checkservers``` shows how many servers I am currently serving \n\ ```userstatus``` shows the status of the message author! \n\ ```avatar``` shows your avatar \n\ ```user``` shows your Discord Username \n\ ```userid``` shows your User ID \n\ ```birth``` shows when your account was created \n\ ```serverstats``` shows stats of your server \n\ ```8ball``` Ask the 8ball! Will answer random answers back \n\ ```userstats``` will show some info about the user! \n\ ```play``` play\'s a song. Currently available: test. Command usage: ```play-[songname]```, for example: ```play-test``` \n\ ```stop``` stops the song. You need to join a voice channel.")
    message.author.sendMessage("```about``` shows info about me! \n\ More commands will come soon! Stay tuned.")
    message.author.sendMessage("A list of songs for the `play` command: \n\ ```play-test``` \n\ ```play-Electro-light_Throwback``` \n\ You can copy+paste the commands from this message for the music! ")
  } else
  if (command === "almighy") {
    message.channel.sendMessage("https://www.youtube.com/watch?v=U06jlgpMtQs \n\ https://www.youtube.com/watch?v=_Efb1DAeA34")
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
  if (command === "serverstats-old") {
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
  if (command === "serverstats") {
  const embed = new Discord.RichEmbed()
    embed.setColor(3447003)
    .setAuthor(`${bot.guilds.get(name).name}`, bot.guilds.get(name).iconURL)
    .setTitle(`${bot.guilds.get(name).name}` , "Server Info")
    .setDescription(`Information about this server`)
    .setThumbnail(bot.guilds.get(name).iconURL)
    .addField(`• Server ID`, name, true)
    .addField(`• Server Owner`, `${bot.guilds.get(name).owner}`, true)
    .addField(`• Server Region`, `${bot.guilds.get(name).region}`, true)
    .addField(`• Created On`, `${bot.guilds.get(name).createdAt}`, true)
    .addField(`• Members`, `${bot.guilds.get(name).memberCount}`, true)
    .addField(`• Default Channel`, `${bot.guilds.get(name).defaultChannel}`, true)
    .addField(`• Channels`, `${bot.guilds.get(name).channels.map(c => c.name).join(", ")}`)
    .addField(`• Roles`, `${bot.guilds.get(name).roles.map(r => r.name).join(", ")}`)
    .setFooter(`Generated on: ${message.createdAt}`)

    message.channel.sendEmbed(embed);
  } else
  var answ = ["Yes", "No", "Why?", "Stfu human", "Let's find it out!", "Maybe", "I don't know mate", "Jesus why u asking such difficult questions", "Definately", "Are you fucking serious", "Get the fuck out!", "For sure!", "Kill yourself", "Yes", "No", "Of course!", "Of course not faggot"];
  if (command === "8ball") {
    message.channel.sendMessage(answ[Math.floor(Math.random() * answ.length)]);
  } else
  if (command === "play-test") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl("https://www.youtube.com/watch?v=U06jlgpMtQs", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  } else
  if (command === "stop") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`You are not in a Voice Channel, be sure to join one first and be sure to check if I am playing something!`)
    } else {
      voiceChannel.leave();
    }
  } else
  if (command === "userstats") {
  const embed = new Discord.RichEmbed()
    embed.setColor(3447003)
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .setTitle(`${message.author.username}` , "Information about this user!")
    .setDescription(`Information about ${message.author.username}`)
    .setThumbnail(message.author.avatarURL)
    .addField(`• Username`, `${message.author.username}`, true)
    .addField(`• Account created`, `${message.author.createdAt}`, true)
    .addField(`• Status`, `${message.author.presence.status}`, true)
    .addField(`• User ID`, `${message.author.id}`, true)
    .setFooter(`Generated on: ${message.createdAt}`)

    message.channel.sendEmbed(embed);
  } else
  if (command === "about") {
  const embed = new Discord.RichEmbed()
    embed.setColor(3447003)
    .setAuthor(`ModzBot`, `http://kuuv.io/i/d035x2P.jpg`)
    .setTitle(`Information about ModzBot!`)
    .setDescription(`am the gr8 bot!`)
    .setThumbnail(`http://kuuv.io/i/d035x2P.jpg`)
    .addField(`What am I`, `I am a bot for Discord. I am currently in development. This bot can do many things.`)
    .addField(`Features!`, `I can welcome people in your server! You can ask me questions, let me play music and more! Use the help command for more info!`)
    .addField(`My website`, `My website, with more information about me and my developer: http://modzon.weebly.com`)
    .setFooter(`send modznoob a joke! generated on ${message.createdAt}`)

    message.channel.sendEmbed(embed);
  } else
  if (command === "play-Electro-light_Throwback") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl("https://www.youtube.com/watch?v=cXLadJlS_nA", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
