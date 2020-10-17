const user = mongoose.model('userSpecial');

module.exports.run = async (bot, message, args) => {
	console.log(args[2])
	if (!message.author.id == bot.owner) return  console.log("1");
	let mentioned = message.content.mentions.first() || args[1];
	let special = args[2];
	message.channel.send(`Adding special role ${special} to user ${mentioned}..`);
	console.log("2")
	if (special == 'botmod') {
		const newUser = new user({
			user: message.author.username,
			id: message.author.id,
			isBotMod: true,
		});
		newUser.save();
		console.log("3")
	} else {
		if (special == 'special') {
			const newUser = new user({
				user: message.author.username,
				id: message.author.id,
				isSpecial: true,
			});
			newUser.save();
			console.log("3")
		}
	}
};

module.exports.help = {
	name: '',
	usage: `nb?`,
	owneronly: 'yes',
	permissions: 'None',
};
