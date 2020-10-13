const fs = require('fs')

module.exports = () => {
fs.readdir('../commands/', (err, files) => {
	if (err) console.log(`${err}`);
	let jsfile = files.filter((f) => f.split('.').pop() === 'js');
	if (jsfile.length <= 0) {
		console.log('Could not find commands.');
		return;
	}
	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} Loaded`);
		bot.commands.set(props.config.name, props);
	});
	console.log("All commands have loaded successfully" .green)
});
}
