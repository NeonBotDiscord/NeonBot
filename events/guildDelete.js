const discord = require('discord.js');
require('dotenv').config(); //gets dotenv for all the secret stuff
const log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place
const BOATSJS = require('boats.js');
const Boats = new BOATSJS(process.env.DBOATSTOKEN);

module.exports = (bot, guild) => {
	console.log(guild.name);
	let logembed = new discord.MessageEmbed().setTitle('Server Left').setDescription(`We just left ${guild.name}`).setColor('PURPLE');
	log.send(logembed);
	Boats.postStats(bot.guilds.cache.size, `${bot.user.id}`)
		.then(() => {
			console.log('Successfully updated server count.');
		})
		.catch((err) => {
			console.error(err);
		});
};
