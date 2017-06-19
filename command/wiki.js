const moment = require("moment");
exports.run = (bot, message, args) => {
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
