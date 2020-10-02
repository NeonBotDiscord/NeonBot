module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You dont have the correct permissions to do that!');
	if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('NeonBot doesnt have permission to ban this user.');
	let kickuser = message.mentions.members.first();
	if (!kickuser) return message.reply('You need to mention a user to kick them');
	if (kickuser.hasPermission('KICK_MEMBERS')) return message.channel.send('That user cannot be kicked.');
	let kickreason = args.join(' ').slice(27);
     let kickembed = new discord.MessageEmbed()
     .setColor("RED")
     .setTitle('Kick')
     .setDescription(`Kicked ${kickuser}\nID: ${kickuser.id}\nBy: <@${message.author.id}>\nReason ${kickreason}`);
	message.channel.send(kickembed);
	if (!kickreason) {
		let kickreason = 'Unknown Reason';
		kickuser.kick(kickreason);
	}
	kickuser.kick(kickreason);
};

module.exports.help = {
	name: 'kick',
	usage: `nb?kick <mention> <reason>`,
	owneronly: "no",
	permissions: "KICK_MEMBERS",
};
