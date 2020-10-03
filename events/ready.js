const discord = require('discord.js');
require('dotenv').config(); //gets dotenv for all the secret stuff
const pack = require('../package.json');
const log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place
const BOATSJS = require('boats.js');
const Boats = new BOATSJS(process.env.DBOATSTOKEN);
const client = require('nekos.life');
const {nsfw} = new client();

module.exports = (bot) => {
	const activities = [`${bot.prefix}help | ${bot.guilds.cache.size} Servers`];
	console.log(`READY | ${bot.user.tag} has logged in!`);
	bot.user.setStatus('idle');
	let i = 0;
	setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 15000);
	let logembed = new discord.MessageEmbed().setTitle('Ready').setDescription(`${bot.user.username} has now started`).setColor('GREEN');
	log.send(logembed);
	Boats.postStats(bot.guilds.cache.size, `${bot.user.id}`)
		.then(() => {
			console.log('Successfully updated server count.');
		})
		.catch((err) => {
			console.error(err);
		});

		setInterval(async() => {
			nsfw.neko().then(neko => {
				console.log(neko)
				bot.channels.cache.get("761830972806266911").send(neko.url)
			})
				
		}, 100)
};
