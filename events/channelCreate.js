const Discord = require('discord.js')
exports.run = async(client,channel) => {
    if(channel.name != 'undefined'){
    let ChannelEmbed = new Discord.RichEmbed()
  .setTitle('**CHANNEL CREATED**')
  .setDescription(`**Channel created: #${channel.name}**`)
  .setColor("#0099ff")
  .setAuthor('Wedding Royale',client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Developed by SVGムParZivaL`);
    client.channels.get('689338414390182086').send({embed:ChannelEmbed});

    }
}
