/*

Neon Bot || Made by Neon Richards
Current version: Release 1.6.0
Global Prefix: nb?
Discord Server: https://discord.gg/ZJq6jvH
Bot Invite: https://discord.com/oauth2/authorize?client_id=728101901668843591&permissions=-1&scope=bot
Date of Creation: 11th of August 2020

*/

/* Boilerplate Start */

console.log('Starting NeonBot');

require('dotenv').config();
global.discord = require('discord.js');
global.log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN);
const bot = new discord.Client({ disableEveryone: true });
bot.commands = new discord.Collection();
bot.prefix = process.env.PREFIX;
bot.owner = '399973532265742336';
const fs = require('fs');

fs.readdir('./commands/', (err, files) => {
	if (err) console.log(`${err}`);
	let jsfile = files.filter((f) => f.split('.').pop() === 'js');
	if (jsfile.length <= 0) {
		console.log('Could not find commands.');
		return;
	}
	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} Loaded`);
		bot.commands.set(props.help.name, props);
	});
	console.log('All commands have loaded successfully');
});

/* Boilerplate End */

/* Login */

bot.login(process.env.BOT_TOKEN);

/* Events Begins */

bot.on('ready', async () => {
	require('./events/ready')(bot);
});

bot.on('message', async (message) => {
	require('./events/message')(message);
});

bot.on('guildCreate', (guild) => {
	require('./events/guildCreate')(bot, guild);
});

bot.on('guildDelete', (guild) => {
	require('./events/guildDelete')(bot, guild);
});

/* Events End */
