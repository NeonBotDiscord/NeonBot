const user = mongoose.model('userSpecial');

module.exports.run = async (bot, message, args) => {
	if (!message.author.id == bot.owner) return;
	let mentioned = message.content.mentions.first() || args[1];
	let special = args[2];
	message.channel.send(`Adding special role ${special} to user ${mentioned}..`);
	if (special == 'botmod') {
		const newUser = new user({
			user: message.author.username,
			id: message.author.id,
			isBotMod: true,
		});
		newUser.save();
	} else {
		if (special == 'special') {
			const newUser = new user({
				user: message.author.username,
				id: message.author.id,
				isSpecial: true,
			});
			newUser.save();
		}
	}
};

module.exports.help = {
	name: '',
	usage: `nb?`,
	owneronly: 'yes',
	permissions: 'None',
};
