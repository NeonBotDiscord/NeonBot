const user = mongoose.model('userSpecial');

module.exports.run = async (bot, message, args) => {
	console.log(args[0], args[1], args[2])
	if (!message.author.id == bot.owner) return  console.log("1");
	let mentioned = message.mentions.members.first()
	let special = args[1];
	message.channel.send(`Adding special role ${special} to user ${mentioned.id}..`);
	console.log("2")
	if (special == 'botmod') {
		const newUser = new user({
			user: mentioned.user.username,
			id: mentioned.id,
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
	name: 'addspecial',
	usage: `nb?`,
	owneronly: 'yes',
	permissions: 'None',
};
