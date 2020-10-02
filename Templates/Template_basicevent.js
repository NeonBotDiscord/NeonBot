const discord = require('discord.js')
require('dotenv').config(); //gets dotenv for all the secret stuff
const log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place


module.exports = (bot) => {
	let logembed = new discord.MessageEmbed().setTitle('').setDescription(``).setColor('');
	log.send(logembed);
}