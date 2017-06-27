const moment = require("moment");
      Discord = require("discord.js");
      yt = require("ytdl-core");
      YouTube = require("youtube-node");
      youTube = new YouTube();
      youTube.setKey('thatsmyapikeynotyours');
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
                    if (result.items[0] === undefined) return message.reply(":no_entry_sign: **Error: nothing found!**");
                    if (result.items[0]["id"].kind !== "youtube#video") return message.reply(`:no_entry_sign: Error: no videos found!`);
                    let url = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`;
                    let name = result.items[0]["snippet"].title;
                    let publisher = result.items[0]["snippet"].channelTitle;
                    let uploaddate = result.items[0]["snippet"].publishedAt;
                    let publishedAt = moment(uploaddate).format('DD MMMM YYYY')
                    let thumbnail = result.items[0]["snippet"]["thumbnails"]["default"].url;
                    //console.log(JSON.stringify(result, null, 2));
                    const now = new Date();
                    const embed = new Discord.RichEmbed
                    embed.setColor("RANDOM")
                    .setAuthor(`${name}`, `${message.author.avatarURL}`, `${url}`)
                    .setThumbnail(`${thumbnail}`)
                    .addField(`Uploader`, `${publisher}`)
                    .addField(`Uploaded at`, `${publishedAt}`)
                    .setFooter(`Generated at ${now}`)

                    message.channel.send({ embed });
                }
            });
         };
         let query = message.content.replace('::youtube search', '');
       searchargs(query);
     }
  if (command === "url") {
    function searchurl(query) {
    youTube.search(query, 10, function(error, result) {
                if (error) {
                    message.channel.sendMessage(`:no_entry_sign: **Error:**\n${error}`);
                    console.log(error);
                } else {
                    if (result.items[0] === undefined) return message.reply(":no_entry_sign: **Error: no videos found!**");
                    let url = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`;
                    let name = result.items[0]["snippet"].title;
                    let publisher = result.items[0]["snippet"].channelTitle;
                    let uploaddate = result.items[0]["snippet"].publishedAt;
                    let resultmsg = [
                      `Title: **${name}**`,
                      `Uploader: **${publisher}**`,
                      `Uploaded on: **${moment(uploaddate).format('DD MMMM YYYY')}**`,
                      `URL: ${url}`
                    ];
                    message.channel.send(resultmsg);
                    //console.log(JSON.stringify(result, null, 2));
                }
            });
         };
         let query = message.content.replace('::youtube search', '');
       searchurl(query);
  }
}
