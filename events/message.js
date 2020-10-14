require('dotenv').config(); //gets dotenv for all the secret stuff
const log = new discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN); // logging place

module.exports = (message) => {
     if(!message.content.startsWith(mainjson.settings.prefix)) return;
     if(message.author.bot) return;
     if(message.channel.type === "DM") return;
     let ArrayMessage = message.content.slice(mainjson.settings.prefix.length).split(' ')
     let command = ArrayMessage[ 0 ]
     let args = ArrayMessage.slice(1)
     if(!command) return;
     let commandfile = bot.commands.get(command)
     if(!commandfile) return;
     commandfile.run(bot, message, args)
     let logmsg = `COMMAND | ${message.author.username} (${message.author.id}) | ${command}`
     console.log(logmsg)
     let logem = new discord.MessageEmbed()
     .setTitle("COMMAND USED")
     .setDescription(logmsg)
     .setFooter(`${bot.user.username} Logger`)
     .setColor("GREEN")
     log.send(logem)
}
