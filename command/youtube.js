const moment = require("moment");
      yt = require("ytdl-core");
      YouTube = require("youtube-node");
      youTube = new YouTube();
      youTube.setKey(process.env.YTKEY);
exports.run = (bot, message, args) => {
if (!args[0]) return;
let command = args[0].toLowerCase();
args = args.join(" ").substring(command.length + 1);
  if (command === "search") {
    function searchargs(query) {
    youTube.search(query, 10, function(error, result) {
                if (error) {
                    message.channel.sendMessage(`:no_entry_sign: **Error:**\n${error}`);
                    console.log(error);
                } else {
                    if (!result.items[0]["id"]) return message.reply(":no_entry_sign: **Error:** There was an issue getting that song.");
                    if (result.items[0]["id"].videoId === undefined) return message.reply(":no_entry_sign: **Error: no videos found!**")
                    let url = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`;
                    message.channel.sendMessage(url);
                }
            });
         };
         let query = message.content.replace('::youtube search', '');
       searchargs(query);
     }
}
