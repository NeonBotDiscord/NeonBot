const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	console.log(args[0])
	let comds = bot.commands.get(args[0])
	if(!args[0] || !comds) {
		let helpembed = new discord.MessageEmbed()
		.setTitle("Help Menu")
		.setFooter("Bot Created by Neon")
		.setAuthor('NeonBot')
		.setColor('BLUE')
		.setDescription(
			bot.commands.filter(props => props.help.owneronly !== "yes").map(props => props.help.name)
		)
		.addField("--------------------------------", "If you need a commands usage, please do nb?help <commandname>")
		message.channel.send(helpembed)
	} else {
		let chelpembed = new discord.MessageEmbed()
		.setTitle(`${args[0]} help`)
		.setFooter("Bot Created by Neon")
		.setAuthor('NeonBot')
		.setColor('BLUE')
		.setDescription(
			bot.commands.filter(props => props.help.name == args[0]).map(props => props.help.usage)
		)
		.addField("--------------------------------")
		.addField("Permissions Needed:")
		.addField(
			bot.commands.filter(props => props.help.name == args[0]).map(props => props.help.permissions)
		)
		message.channel.send(chelpembed)
	}
	
};

module.exports.help = {
	name: 'help',
	usage: `nb?help`,
	owneronly: "no",
	permissions: "None",
};
