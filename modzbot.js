const Discord = require("discord.js");
const bot = new Discord.Client();

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
    message.channel.sendMessage("al-stab, al-stab, I stabbed someone for yuo");
  } else
  if (command === "invite") {
    message.channel.sendMessage("Invite me! https://discordapp.com/oauth2/authorize?client_id=297437352127627264&scope=bot")
  } else
  if (command === "status") {
    message.channel.sendMessage("Online!")
  } else
  if (command === "checkservers") {
    message.channel.sendMessage(`Currently in ${bot.guilds.size} servers!`)
  } else
  if (command === "help") {
    message.channel.sendMessage("Check your DM for help")
    message.author.sendMessage("The prefix for every command is a : \n\ For example: **`:help`** \n\ \n\ `help` shows this command \n\ `stab` stabs someone for you \n\ `status` shows the status of the bot \n\ `ping` the bot will react back \n\ `invite` will send the invite link so you can invite it to your own server \n\ `checkservers` shows how many servers I am currently serving \n\ `song` sends the best songs of the universe! (don't get triggered) \n\ `gibsoviet` a g8 poem for yuo \n\ More commands coming soon...")
  } else
  if (command === "song") {
    message.channel.sendMessage("The best songs for you! \n\ https://www.youtube.com/watch?v=U06jlgpMtQs \n\ https://www.youtube.com/watch?v=_Efb1DAeA34")
  } else
  if (command === "gibsoviet") {
    message.channel.sendMessage(">Get loud speakers \n\ >Buy a t-90 or if you can't get that T-55 \n\ >Plug speakers into a compute \n\ >volume is a max \n\ >start playing \n\ >drive around a major city with a soviet flag out and the song playing \n\ >look at people reactions \n\ >get shot by the cops for being communist and having a fucking Tank \n\ >Go into the hull \n\ >close the hatch's \n\ >run over cops \n\ >military/special forces come \n\ >carry on driving \n\ >other tank comes \n\ >load ammo \n\ >fire \n\ >miss \n\ >get blown up \n\ >survive \n\ >grab that flag over yours \n\ >scream the Soviet union shall rise again \n\ >die")
  }
});
