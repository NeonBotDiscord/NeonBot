const discord = require('discord.js')
require('dotenv').config(); //gets dotenv for all the secret stuff
const log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place


module.exports = (bot, guild) => {
     console.log(guild.name);
	let logembed = new discord.MessageEmbed().setTitle('Server Joined').setDescription(`We just joined ${guild.name}`).setColor('PURPLE');
	log.send(logembed);
}