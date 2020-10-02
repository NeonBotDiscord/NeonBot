module.exports.run = async (bot, message, args) => {
     if(message.content.includes("@everyone")) return message.reply("Don't try to ping `@everyone`");
     if(message.content.includes("@here")) return message.reply("Don't try to ping `@here`");
     if(message.content.includes("@")) return message.reply("Don't try to ping.");
     let say = args.join(' ');
     message.channel.send(say)
};

module.exports.help = {
	name: 'say',
	usage: `nb?say <message>`,
     owneronly: "no",
     permissions: "None",
};
