require 'discordrb'

bot = Discordrb::Commands::CommandBot.new token: '', client_id: , prefix: ':'

puts "This bot's invite URL is #{bot.invite_url}."
puts 'I am booting, faggots!.'

bot.mention do |event|
  event << 'Hello, I am the stronk **Modzbot**!'
  event << 'I can into triggered'
  event << 'Use :help for a list of the commands.'
  event << 'Currently in development.'
end

bot.command :ping do |event|
  m = event.respond('stfu stupid human')
  m.edit "stfu stupid human (#{Time.now - event.timestamp} ms.)"
end

bot.command :help do |event|
  event << 'well check ur DMs I guess'
  event.user.pm('**:help** shows this message. For the full list of commands, go here: http://modzongaming.weebly.com/list-of-commands.html')
end

bot.command :banesti do |event|
  event << '**Teddy** just buggered off.'
end

bot.command :quotes do |event|
  event << '*F"ck you and your cookies!*'
  event << '*Paint is not as shit as I thought!*'
  event << '*Verdomme Bart!*'
  event << '*Faggot!* (wait that is a quote of Modz)'
end

bot.command :name do |event|
  event.user.name
end

bot.command :test do |event|
  event.user.name
  event << 'Yes, this works'
end

bot.command(:roll, min_args: 0, max_args: 2, description: 'Generates a random number between 0 and 1, 0 and max or min and max.', usage: 'roll [min/max] [max]') do |_event, min, max|
  if max
    rand(min.to_i..max.to_i)
  elsif min
    rand(0..min.to_i)
  else
    rand
  end
end

bot.command(:exit, help_available: false) do |event|
  break unless event.user.id == 264331473308483584 # Replace number with your ID
  bot.send_message(event.channel.id, 'goodbye my friends it was nice knowing you now I am going to shut down for a bit but I will be back for you faggots!')
  exit
end

bot.run
