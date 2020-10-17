module.exports.run = async (bot, message, args) => {
     if(!args[0]) return message.reply("Remember, this is a formal feedback message to the creators, you have to include something atleast.")
     let feedback = args.join(' ');
     let feedbackembed = new discord.MessageEmbed()
     .setTitle("Feedback Sent")
     .setColor("RANDOM")
     .setDescription("Feedback has been sent to the creators.")
     message.channel.send(feedbackembed)
     let sentembed = new discord.MessageEmbed()
     .setTitle(`Feedback From ${message.author.username}`)
     .setColor("RANDOM")
     .setDescription(feedback)
     bot.channels.cache.get("747704525418266694").send(sentembed)
};

module.exports.help = {
     name: 'feedback',
     usage: `nb?feedback <feedbackmessage>`,
	owneronly: "no",
	permissions: "None",
};
/* */