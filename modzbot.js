const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const moment = require("moment");
const streamOptions = { seek: 0, volume: 1 };
const key = require("./config.json"); //contains the prefix and bot token

bot.login(process.env.Token);

const now = new Date();
 const date = moment(now).format("MMM/DD/YYYY"); //month date and year.
const time = moment(now).format("H:mm:ss");

bot.on("ready", () => {
  console.log(`${bot.readyAt}: Ready to serve ${bot.guilds.size} servers!`)

bot.on('guildCreate', Guild => {
  let toSend = [
 "I've been invited to " + "\**" + Guild.name + "\**",
  "Guild ID: " + "\**" + Guild.id + "\**",
  "Guild Members Count: " + "\**" + Guild.memberCount + "\**",
  "Guild Region: " + "\**" + Guild.region + "\**"
];

bot.channels.get("305383689464971264").sendMessage(toSend);
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
  bot.user.setGame(`:help :about | In ${bot.guilds.size} Servers!`);
});

bot.on("message", (message) => {

  if (!message.content.startsWith(key.prefix)) return;

  if (message.author.bot) return;

  let command = message.content.split(" ")[0]; //splits the message to read different arguments from the user
command = command.slice(key.prefix.length); //command is the word connected to the prefix

let args = message.content.split(" ").slice(1); //the second word from the users command is stored

  if (command === "ping") {
    message.channel.sendMessage( 'Kys' ).then( message => {
      message.edit( `Can you stfu now please ( ${ message.createdTimestamp - message.createdTimestamp } ms )` );
      }
    );
  } else
  if (command === "stab") {
    if (message.mentions.users.first() !== undefined) {
      message.reply(`perkele сука блять I stabbed ${message.mentions.users.first()}`);
    } else {
    message.reply(`perkele сука блять I stabbed someone`);
  }
} else
  if (command === "invite") {
    message.reply("Invite me! https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot&permissions=66321471")
    console.log(`${message.createdAt}: ${message.author.username} requested the bot\'s invite link`)
  } else
  if (command === "status") {
    message.channel.sendMessage("Online!")
  } else
  if (command === "checkservers") {
    message.channel.sendMessage(`Currently in ${bot.guilds.size} servers!`)
  } else
  if (command === "help") {
    message.reply("Check your DM's for help!")
	  message.author.sendMessage("**ModzBot Commands** \n **::about** sends some info about me in the channel \n **::invite** sends an invite link for the bot \n **::userstats <mentioned-user>** will give some info about the mentioned user! \n **::serverstats** gives stats about the server \n **::8ball <question>** answers a question for you! \n **::stab <mentioned-user>** stabs the mentioned user \n **::kick <mentioned-user>** kicks the mentioned user! (Permissions for kicking users required!) \n **::avatar** shows your avatar! \n **::birth** will show the date you have created your account! \n **::userid** shows your user ID \n **::usergame** shows the game you are currently playing \n **::clear <messageamount>** clears an amount of messages in the channel. Requires the \"Manage messages\" permission. \n **::support** will send an invite link to my server. \n **::ban <mentioned-user>** will ban the mentioned user from the server \n **::bugreport <bug>** will report the bug to my developer!");
	    message.author.sendMessage("**ModzBot Music Commands** \n *Be sure to be in a voice channel first!* \n  **::play-<song>** plays the song! \n **::stop** stops the music \n **List of commands for \`play\`** \n \`play-test\` \n \`play-Electro-light_Throwback\`");
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
  if (command === "serverstats-old") { //old serverstats
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
  if (command === "serverstats") { //new serverstats
    var x = new Boolean(false);
    if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to get serverinfo in a DM channel`) //console error message
    } else { //continue with Serverstats
      let name = message.guild.id;
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
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);
        console.log(`${message.createdAt}: ${message.author.username} requested serverinfo about ${bot.guilds.get(message.guild.id).name}`)
    }
} else //next command
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
  if (command === "userstats-old") {
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
    .setFooter(`Generated on ${message.createdAt}`)

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
    .addField(`Features!`, `I can welcome people in your server! You can ask me questions, let me play music and more!`)
    .addField(`My website`, `My website, with more information about me and my developer: http://modzon.weebly.com.`)
    .addField(`Commands`, `For a list of all the commands, use the \`help\` command! A command list can also be found on my site.`)
    .addField(`Servers`, `I am currently in ${bot.guilds.size} servers!`)
    .setFooter(`send modznoob a joke! Generated on ${message.createdAt}`)

    message.channel.sendEmbed(embed);

    console.log(`${message.createdAt}: ${message.author.username} requested info about me`)
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
  } else
  if (command === "kick")
    if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to kick someone in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    message.reply("I do not have the right permissions! (Kick Members)");
    } else {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
      let userToKick = message.mentions.users.first();
      message.guild.member(userToKick).kick();
      message.reply(`kicked ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} kicked ${message.mentions.users.first()}`)
    }
  }
} else
  if (command === "userstats") {
    if (message.mentions.users.first() === undefined) {
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
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);

        console.log(`${message.createdAt}: ${message.author.username} requested userinfo about ${message.author.username}`)
    } else {
      const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        .setAuthor(`${message.mentions.users.first().username}`, message.mentions.users.first().avatarURL)
        .setTitle(`${message.mentions.users.first().username}` , "Information about this user!")
        .setDescription(`Information about ${message.mentions.users.first().username}`)
        .setThumbnail(message.mentions.users.first().avatarURL)
        .addField(`• Username`, `${message.mentions.users.first().username}`, true)
        .addField(`• Account created`, `${message.mentions.users.first().createdAt}`, true)
        .addField(`• Status`, `${message.mentions.users.first().presence.status}`, true)
        .addField(`• User ID`, `${message.mentions.users.first().id}`, true)
        .setFooter(`Generated on ${message.createdAt}`)

        message.channel.sendEmbed(embed);

        console.log(`${message.createdAt}: ${message.author.username} requested userinfo about ${message.mentions.users.first().username}`)
    }
  } else
  if (command === "clear")
    if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to clear messages in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
      message.reply("Error: I miss the right permissions to do that! (Manage messages)");
    } else {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.reply("Error: You miss the right permissions to do that!");
    } else {
      let messagecount = parseInt(args[0]); //args are the
      message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
      console.log(`${message.createdAt}: ${message.author.username} used the :clear command`)
      }
    }
  } else
  if (command === "support") {
    message.reply("Join my Discord server here! https://discord.gg/T2cvH6v")
  } else
  if (command === "ban")
    if (message.guild === null) { //DM channel
      message.reply("Go into a server instead and try it again there!") //error message
      console.log(`${message.createdAt}: ${message.author.username} tried to ban someone in a DM channel`) //console error message
    } else { //continue with command
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    message.reply("I do not have the right permissions! (Ban Members)");
    } else {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
     message.reply("You do not have the right permissions!");
    } else {
      let userToBan = message.mentions.users.first();
      const embed = new Discord.RichEmbed()
        embed.setColor('#CE0000')
        .setTitle(`Admin log` , `From ${message.guild.name}`)
        .setDescription(`**${message.author.username}** banned **` + userToBan + `** from **${message.guild.name}**`)
        .setFooter(`Generated on ${message.createdAt}`)
      message.guild.member(userToBan).ban(7);
      message.reply(`banned ${message.mentions.users.first()}`);
      console.log(`${message.createdAt}: ${message.author.username} banned ${message.mentions.users.first()}`)
      bot.channels.get("305057972755759104").sendEmbed(embed);
      }
    }
  } else
  if (command === "announcement")
    if(message.author.id != "264331473308483584") {
      message.reply(`You don\'t have permission to do that!`)
      console.log(`${message.createdAt}: ${message.author.username} tried to use the announcement command`)
    } else {
    var announcement = args.join(" ")
    console.log(`${message.createdAt}: Announcement: ` + announcement);
    bot.guilds.forEach(guild => { guild.defaultChannel.sendMessage(announcement) });
  } else
  if (command === "bugreport")
    if (message.guild !== null) {
      var output = args.join(" ");

      bot.channels.get("301421032210956289").sendMessage("Bug report from " + "**" + message.member.guild.name + "**" + "```\n" + output + "\n```");

    message.channel.sendMessage("Bug reported! For more support, join my Discord server: https://discord.gg/T2cvH6v");
    console.log(`${message.createdAt}: ${message.member.guild.name} reported a bug`)
  } else {
    message.reply("Try it again in a server!")
  }
});
