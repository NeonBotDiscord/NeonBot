const user = mongoose.model('userSettings');

module.exports.run = async (bot, message, args) => {
	if (!message.author.id == bot.owner) return console.log('1');
	let mentioned = message.mentions.members.first();
	let special = args[1];
	if (special == 'mod') {
		const newUser = new user({
			user: mentioned.user.username,
			id: mentioned.id,
			isBotMod: true,
		});
		newUser.save();
		message.channel.send('Added user settings to the database');
	} else {
		if (special == 'special') {
			const newUser = new user({
				user: message.author.username,
				id: message.author.id,
				isSpecial: true,
			});
			newUser.save();
			message.channel.send('Added user settings to the database');
		}
	}
};

module.exports.help = {
	name: 'addspecial',
	usage: `nb?`,
	owneronly: 'yes',
	permissions: 'None',
};
