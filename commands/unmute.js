const Discord = require('discord.js')
exports.run = async(client,message,args)=>{
	if(!message.member.roles.some(r=>["Rooster", "Wolfzzy's world","Hen"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot mute this user! Do they have a higher role? Do I have mute permissions?");


    var role = member.guild.roles.get('689340993299808283');
     if(member.roles.has(role.id)){
    member.removeRole(role).catch(c=>console.log(c));

     const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Wedding Royale','https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
  .setTitle(member.user.tag+" unmuted successfully")
  .setThumbnail('https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
  .setTimestamp()
  .setFooter('Developed by SVGムParZivaL', 'https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128');
  message.channel.send({embed:exampleEmbed});
     }
     else{
       const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Wedding Royale','https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
  .setTitle(member.user.tag+" is not muted")
  .setThumbnail('https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128')
  .setTimestamp()
  .setFooter('Developed by SVGムParZivaL', 'https://cdn.discordapp.com/avatars/689340923301199925/ac6f98b33426868ee8f7b13cbec5c4b6.png?size=128');
  message.channel.send({embed:exampleEmbed});
     }

}
exports.help = {
  name : "unmute",
  description: "Unmutes the user",
  aliases: ["unmute"],
  usage: process.env.PREFIX+"unmute/alias <user>",
  permissions:true,
  roles:["Rooster", "Wolfzzy's world","Hen"]
};
