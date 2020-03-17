const Discord = require('discord.js')
exports.run = (client,messageDeleted)=>{
   if(messageDeleted.author.bot) return;

   let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#0099ff")
  .setAuthor(messageDeleted.author.tag,messageDeleted.author.avatarURL)
  .addField("Channel", messageDeleted.channel)
  .addField("Message", messageDeleted.content)
  .setTimestamp()
  .setFooter(`Author ID: ${messageDeleted.author.id}`);
  let message = messageDeleted.guild.channels.get('689338414390182086')
  message.send({embed:DeleteEmbed});
}
