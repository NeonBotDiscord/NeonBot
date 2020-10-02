module.exports.run = async (bot, message, args) => {
	let member = message.mentions.members.first();
	let uinfoembed = new discord.MessageEmbed()
		.setTitle(`Info for the user ${member.displayName}`)
		.setAuthor('NeonBot')
		.addField(`Created At`, `${member.user.createdAt}`)
		.addField(`User ID`, `${member.id}`)
		.addField(`Status`, `${member.presence.status}`)
		.addField(`Roles`, `${member.roles.cache.map(r => r.name)}`)
		.addField(`Server Based Info`, `Last Message: ${member.lastMessage}`, `Joined At: ${member.joinedAt}`, `Display Color: ${member.displayColor}`);
	message.channel.send(uinfoembed);
};

module.exports.help = {
	name: 'uinfo',
	usage: `nb?uinfo`,
	owneronly: "no",
	permissions: "None",
};
