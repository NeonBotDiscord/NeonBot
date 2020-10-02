module.exports.run = async (bot, message, args) => {
     let pingembed = new discord.MessageEmbed()
     .setTitle('Ping')
     .setAuthor('NeonBot')
     .setColor('BLUE')
     .setDescription(`Ping is ${bot.ws.ping}ms`);
	message.channel.send(pingembed);
};

module.exports.help = {
	name: 'ping',
	usage: `nb?ping`,
     owneronly: "no",
     permissions: "None",
};
