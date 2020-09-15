const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
     message.reply("Command currently doesnt work. waiting for me to get in a bot list to write it, sorry.")
};

module.exports.help = {
	name: 'botlist',
	usage: `nb?botlist <dboats> || currently not working, waiting for the bot to join discordboats :)  `,
	owneronly: "yes",
	permissions: "BOT_OWNER",
};