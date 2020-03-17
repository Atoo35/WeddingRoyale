

exports.run = async (client,member,invites) => {



	const msg = "Welcome, "+member.user+" to our tournament server! \n\n"+
  "Please read the  "+member.guild.channels.get('688941574910246944')+ "and all the "+ member.guild.channels.get('688941477463719941')+"\n\n"+  
  " If you have any kind of questions, hop over into "+member.guild.channels.get('688941606912524338')+ "\n\n"+
  "Please write your username in "+member.guild.channels.get('689263431437910016')+"\n\n"+
  "And make sure to sign up in"+member.guild.channels.get('689210608096116807')+"\n\n"

      member.guild.channels.get('682515470410317844').send(msg);
  var role = member.guild.roles.get('682486111913902091');
  member.addRole(role).catch(c=>console.log(c));

}
