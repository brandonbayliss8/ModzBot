const moment = require("moment");
    //  wiki = require(`wikijs`).default;
    //  Intlpedia = require('intl-wikipedia');
exports.run = (bot, message, args) => {
  //wiki().search('star wars', 1).then(data => console.log(JSON.stringify(data, null, 2)));
  //wiki().page('batman').then(page => message.channel.send(page.summary()));

//  wiki().search(args.join(' '), 1).then(data => {
//    if (!data) return message.reply(`Nothing found!`);
//    message.channel.send(JSON.stringify(data.results[0], null, 2).replace("\"", ''))
//  })
  if (!args[0]) return;
  let command = args[0].toLowerCase();
  args = args.join("_").substring(command.length + 1);
  let wikipage = args;
  if (command === "nl") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://nl.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "fr") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://fr.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "en") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://en.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "de") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://de.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "fi") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://fi.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "vn") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://vi.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "cn") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://zh.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "jp") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://ja.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "ru") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://ru.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "sv") {
    if (!wikipage) return message.reply(`You didn't specify a Wikipedia page!`);
    message.channel.send("https://sv.wikipedia.org/wiki/" + wikipage);
  }
  if (command === "help") {
    let helpmsg = [
      "**__Help message for the ModzBot__ `::wiki` __command__**",
      "**What does the command do?**",
      "It will give you the specified WikiPedia page, with language!",
      "**Command usage**",
      "`::wiki <language> <page>`",
      "Replace <language> with one of the available languages: `en` (English), `nl` (Dutch), `fr` (French), `de` (German), `fi` (Finnish), `vn` (Vietnamese), `cn` (Chinese), `jp` (Japanese), `ru` (Russian), and `sv` (Swedish).",
      "Replace <page> with your search query.",
      "Example usage:",
      "`::wiki en Bayern Munich`",
      "will return the Wikipedia page about the Football Club Bayern Munich"
    ];
    message.channel.send(helpmsg);
  }
}
