const user = mongoose.model('userSettings');
const guild = mongoose.model('guildSettings')

module.exports.run = (bot, message, args) => {
  if (message.author.id == bot.owner) {
    const content = message.content.split(' ').slice(1).join(' ');
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Nice try.');
    
    const em = new discord.MessageEmbed()
    .addField("Eval returned:", "```js\n"+output+"```")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter("Eval")

    return message.channel.send({embed: em})
  }).catch(err => {
    console.error(err);
    err = err.toString();
	
    if (err.includes(bot.token)) err = err.replace(bot.token, 'Nice try.');

    const em = new discord.MessageEmbed()
    .addField("Eval returned:", "```js\n"+err+"```")
    .setTimestamp()
    .setColor("RED")
    .setFooter("Eval")
  
    return message.channel.send({embed: em})
  });  
  } else {
    message.channel.send("Invalid permissions!")
  }
  }

module.exports.help = {
	name: 'eval',
	usage: `nb?`,
	owneronly: 'yes',
	permissions: 'all',
};
