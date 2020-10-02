
module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have the correct permissions to do that!');
	if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('NeonBot doesnt have permission to ban this user.');
	let banuser = message.mentions.members.first();
	if (!banuser) return message.reply('You need to mention a user to ban them');
	if (banuser.hasPermission('BAN_MEMBERS')) return message.channel.send('That user cannot be banned.');
	let banreason = args.join(' ').slice(args[1].length);
     let banembed = new discord.MessageEmbed()
     .setTitle('Ban')
     .setColor('RED')
     .setDescription(`Banned ${banuser}\nID: ${banuser.id}\nBy: <@${message.author.id}>\nReason ${banreason}`);
	message.channel.send(banembed);
	if (!banreason) {
		let banreason = 'Unknown Reason';
		banuser.ban(banreason);
	}
	banuser.ban(banreason);
};

module.exports.help = {
	name: 'ban',
	usage: `nb?ban <mention> <reason>`,
	owneronly: "no",
	permissions: "BAN_MEMBERS",
};
