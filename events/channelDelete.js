const Discord = require('discord.js')
exports.run = async(client,channel) => {
  let ChannelEmbed = new Discord.RichEmbed()
  .setTitle('**CHANNEL DELETED**')
  .setDescription(`**Channel Deleted: #${channel.name}** `)
  .setColor("#0099ff")
  .setAuthor('Tide Gaming',client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Developed by Tide Gaming`);
    client.channels.get('689338414390182086').send({embed:ChannelEmbed});

}
