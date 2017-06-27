const yt = require('ytdl-core');
exports.run = (bot, message, args, err) => {
    const url = args.join(" ");
    const voiceChannel = message.member.voiceChannel;
    if (!args[0]) return message.reply(`Please enter a valid YouTube URL first!`)
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    if (url.includes("https://youtube.com/") || url.includes("https://www.youtube.com/") || url.includes("http://youtube.com/") || url.includes("http://www.youtube.com/") || url.includes("https://youtu.be/") || url.includes("https://www.youtu.be/") || url.includes("http://youtu.be/") || url.includes("http://www.youtu.be/")) {
    voiceChannel.join()
      .then(connnection => {
        dispatcher = message.guild.voiceConnection.playStream(yt(url, {
            audioonly: true
        }), {
            passes: 1
        });
        yt.getInfo(url, function(err, info) {
        if (err) {
          voiceChannel.leave();
          message.reply("Error! \n" + err);
        } else {
          message.channel.send(":notes: Playing **" + info.title + "** for **" + message.author.username + "**");
          }
        });
        let collector = message.channel.createMessageCollector(m => m);
        collector.on('collect', c => {
            if (c.content.startsWith('::pause')) {
                message.channel.send('Song paused').then(() => {
                    dispatcher.pause();
                });
            } else if (c.content.startsWith('::resume')) {
                message.channel.send('Song resumed').then(() => {
                    dispatcher.resume();
                });
            } else if (c.content.startsWith('::stop')) {
                message.channel.send('Stopped').then(() => {
                    dispatcher.end();
                });
        }
      });
        dispatcher.on('end', () => {
            collector.stop();
            voiceChannel.leave();
        });
        dispatcher.on('error', (err) => {
            return message.channel.send(':no_entry_sign: Error: ' + err).then(() => {
                collector.stop();
                voiceChannel.leave();
            });
        });
    })
  } else {
    message.reply("Enter a valid Youtube URL!");
  }
  }
