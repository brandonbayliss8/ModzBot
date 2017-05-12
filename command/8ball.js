exports.run = (bot, message, args) => {
  var answ = ["Yes", "No", "Why?", "Please stfu human", "Let's find it out!", "Maybe", "I don't know mate", "Definately", "Are you serious?", "For sure!", "Yes", "No", "Of course!", "Of course not"];
    message.channel.sendMessage(answ[Math.floor(Math.random() * answ.length)]);
}
