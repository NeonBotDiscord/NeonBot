module.exports.run = async (bot, message, args) => {
	let infoembed = new discord.MessageEmbed()
		.setTitle('Info Menu')
		.setAuthor('NeonBot')
		.setColor('BLUE')
		.addField(`Start Date:`, `NeonBot was created on the 11th of August 2020`)
		.addField(`Running:`, `NeonBot uses discord.js ${discord.version}`)
		.addField(`Bot Invite:`, `[Click Here](https://discord.com/oauth2/authorize?client_id=728101901668843591&permissions=-1&scope=bot)`)
		.addField(`Support Server:`, `[Click Here](https://discord.gg/ZJq6jvH)`);
	message.channel.send(infoembed);
};

module.exports.help = {
	name: 'info',
	usage: `nb?info`,
	owneronly: "no",
	permissions: "None",
};
