const gagScraper = require('9gag-scraper');
      Discord = require('discord.js');
      moment = require('moment');
exports.run = (bot, message, args) => {
  if (!args[0]) return message.reply(`You have nothing specified! Please specify one of the following options: \n\`\`\`css\nrandom\nfresh\ntrending\ngif\nwtf\nsavage\ncomic\`\`\``);
  let command = args[0].toLowerCase();
  args = args.join(" ").substring(command.length + 1);
  if (command === "random") {
    new gagScraper().getRandom(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);
      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.url}`)
      .setImage(`${data.image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    //console.log(data.id); // 9GAG post ID
    //console.log(data.url); // 9GAG post URL
    //console.log(data.title); // 9GAG post title
    //console.log(data.image); // 9GAG post image link
    });
  }
  if (command === "fresh") {
    new gagScraper("fresh").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    });
  }
  if (command === "trending") {
    new gagScraper("trending").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    //console.log(data.count); // Total posts returned
    //console.log(data.gags); // posts object ( array of posts )

    //console.log(data.gags[0].id); // 9GAG post ID
    //console.log(data.gags[0].url); // 9GAG post URL
    //console.log(data.gags[0].title); // 9GAG post title
    //console.log(data.gags[0].image); // 9GAG post image link

    });
  }
  if (command === "gif") {
    new gagScraper("gif").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
      //message.channel.send(data.gags[0].image);
    });
  }
  if (command === "wtf") {
    new gagScraper("wtf").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    });
  }
  if (command === "savage") {
    new gagScraper("savage").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    });
  }
  if (command === "comic") {
    new gagScraper("comic").getGags(function (error, data) {
      if (error) return message.reply(`Error! Report this please: \n\`${error}\``);

      const now = new Date();
      const embed = new Discord.RichEmbed
      embed.setColor("RANDOM")
      .setAuthor(`${data.gags[0].title}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/9GAG_new_logo.svg/320px-9GAG_new_logo.svg.png`, `${data.gags[0].url}`)
      .setImage(`${data.gags[0].image}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}, on ${now}`)

      message.channel.send({ embed });
    });
  }
}
