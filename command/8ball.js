exports.run = (bot, message, args) => {
  let question = args.join(' ');
  if (question === "kieb") return message.channel.sendMessage("kieb is stronk");
  if (question === "jetti") return message.channel.sendMessage("no fuk you kieb stronk");
  var answ = ["Yes", "No", "Why?", "Please stop, human", "Let's find it out!", "Maybe", "I don't know mate", "Definately", "Are you serious?", "For sure!", "Yes", "No", "Of course!", "Of course not"];
  if (!question) return message.reply(`Please ask me a question`)
    message.channel.send(answ[Math.floor(Math.random() * answ.length)]);
}
