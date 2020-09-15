const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let sinfoembed = new discord.MessageEmbed()
		.setTitle(`Server Info for the server ${message.guild.name}`)
		.setAuthor('NeonBot')
		.addField(`Created At`, `${message.guild.createdAt}`)
		.addField(`Joined At`, `${message.guild.joinedAt}`)
		.addField(`Member Count`, `${message.guild.memberCount}`)
		.addField(`Server ID`, `${message.guild.id}`)
		.addField(`Owner ID`, `${message.guild.owner.id}`)
		.addField(`Server Settings`, `Region: ${message.guild.region}`, `MFALevel: ${message.guild.mfaLevel}`);
	message.channel.send(sinfoembed);
};

module.exports.help = {
	name: 'sinfo',
	usage: `nb?sinfo`,
	owneronly: "no",
	permissions: "None",
};

