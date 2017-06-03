const Discord = require("discord.js");
      bot = new Discord.Client();
      yt = require('ytdl-core');
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

let queue = new Object();

const musicCommands = {
  'play': (message) => {
        if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ;add`);
        if (!message.guild.voiceConnection) return musicCommands.join(message).then(() => musicCommands.play(message));
        if (queue[message.guild.id].playing) return message.channel.sendMessage('Already Playing');
        let dispatcher;
        queue[message.guild.id].playing = true;

        (function play(song) {
            if (song === undefined) return message.channel.sendMessage('Queue is empty').then(() => {
                queue[message.guild.id].playing = false;
                message.member.voiceChannel.leave();
            });
            message.channel.sendMessage(`:notes: Playing **${song.title}** as requested by **${song.requester}**`);
            dispatcher = message.guild.voiceConnection.playStream(yt(song.url, {
                audioonly: true
            }), {
                passes: 1
            });
            let collector = message.channel.createCollector(m => m);
            collector.on('message', m => {
                if (m.content.startsWith(':pause')) {
                    message.channel.sendMessage('Song paused').then(() => {
                        dispatcher.pause();
                    });
                } else if (m.content.startsWith(':resume')) {
                    message.channel.sendMessage('Song resumed').then(() => {
                        dispatcher.resume();
                    });
                } else if (m.content.startsWith(':skip')) {
                    message.channel.sendMessage('Skipped').then(() => {
                        dispatcher.end();
                    });
            }
          });
            dispatcher.on('end', () => {
                collector.stop();
                play(queue[message.guild.id].songs.shift());
            });
            dispatcher.on('error', (err) => {
                return message.channel.sendMessage(':no_entry_sign: Error: ' + err).then(() => {
                    collector.stop();
                    play(queue[message.guild.id].songs.shift());
                });
            });
        })(queue[message.guild.id].songs[0]);
    },
    'join': (message) => {
        return new Promise((resolve, reject) => {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Error: I couldn\'t connect to your voice channel...');
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });
    },
    'add': (message) => {
        function addFromUrl(url) {
            message.channel.sendMessage("*Adding...*");
            if (url == '' || url === undefined) return message.channel.sendMessage(`You must add a YouTube video url after ;add`);
            yt.getInfo(url, (err, info) => {
                if (err) return message.channel.sendMessage(':no_entry_sign: Invalid YouTube Link: ' + err);
                if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                queue[message.guild.id].songs.push({
                    url: url,
                    title: info.title,
                    requester: message.author.username
                });
                message.channel.sendMessage(`Added **${info.title}** to the queue!`);
            });
        }

        if (message.content === ":add") return;
        let url = message.content.split(' ')[1];
        if (url.includes("https://youtube.com/") || url.includes("https://www.youtube.com/") || url.includes("http://youtube.com/") || url.includes("http://www.youtube.com/") || url.includes("https://youtu.be/") || url.includes("https://www.youtu.be/") || url.includes("http://youtu.be/") || url.includes("http://www.youtu.be/")) {
            addFromUrl(url);
        } else {
          return message.reply(`Enter a valid YouTube URL!`)
        }
    },
    'queue': (message) => {
        if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`The queue is empty! Add songs to the queue using \`::add <youtubeURL>\``);
        let tosend = [];
        queue[message.guild.id].songs.forEach((song, i) => {
            tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);
        });
        message.channel.sendMessage(`__**Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
    }
};

bot.on("message", message => {
  if (message.channel.type === "dm") return; //ignore dm's

  if (message.author.bot) return; //ignore bot users

  if (!message.content.startsWith(config.prefix)) return; //ignore messages without prefix
  
  if (musicCommands.hasOwnProperty(message.content.toLowerCase().slice(1).split(' ')[0])) musicCommands[message.content.toLowerCase().slice(1).split(' ')[0]](message); //runs music commands

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
