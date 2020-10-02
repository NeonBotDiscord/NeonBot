const colors = require("colors")
const { StopWatch } = require('stopwatch-node')
console.log("Starting NeonBot" .green)
require('dotenv').config(); //gets dotenv for all the secret stuff
global.discord = require('discord.js'); // discord.js cause its needed
global.log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place
const bot = new discord.Client({disableEveryone: true}); // bot, and remove @everyone / @here pings :)
bot.commands = new discord.Collection(); // command collection
bot.prefix = process.env.PREFIX
bot.owner = "399973532265742336"
const fs = require('fs');
fs.readdir('./commands/', (err, files) => {
	if (err) console.log(`${err}` .red);
	let jsfile = files.filter((f) => f.split('.').pop() === 'js');
	if (jsfile.length <= 0) {
		console.log('Could not find commands.' .red);
		return;
	}
	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} Loaded` .yellow);
		bot.commands.set(props.help.name, props);
	});
	console.log("All commands have loaded successfully" .green)
});

// Needed events
bot.on('ready', async () => {
	require('./events/ready')(bot); // ready function
});
bot.on('message', async (message) => {
	if (message.author.bot || message.channel.type === 'dm') return; // no chance are bots using me
	if (!message.content.startsWith(bot.prefix)) return; // wait, no, that doenst have our prefix!
	if(message.guild.id == "439866052684283905") return console.log("Attempted command from Discord Boats");
	let MessageArray = message.content.toLowerCase().slice(bot.prefix.length).split(' '); // Arrays are cool
	let cmd = MessageArray[ 0 ]; // turn our array into a string so then we can abuse it
	let args = MessageArray.slice(1); // grab then argsss
	
	if (!cmd) return; // hmmm, thats not a bot command!
	let commandfile = bot.commands.get(cmd); // get the command file
	if (commandfile) commandfile.run(bot, message, args); // use the command file
	let logembed = new discord.MessageEmbed().setTitle('Command Used').setDescription(`${message.author.username} has used the command | ${cmd}`).setColor('RANDOM');
	log.send(logembed);
	console.log(`${message.author.username} has used the command | ${cmd}` .yellow);
});
//Guild Based Events
bot.on('guildCreate', (guild) => {
	require('./events/guildCreate')(bot, guild); // guildCreate function
});

bot.on('guildDelete', (guild) => {
	require('./events/guildDelete')(bot, guild); // guildDelete function
});

bot.login(process.env.BOT_TOKEN); // LOGIN
/*
Neon Bot || Made by Neon Richards
Current version: Release 1.2
Global Prefix: nb?
Discord Server: https://discord.gg/ZJq6jvH
Bot Invite: https://discord.com/oauth2/authorize?client_id=728101901668843591&permissions=-1&scope=bot
Date of Creation: 11th of August 2020
*/