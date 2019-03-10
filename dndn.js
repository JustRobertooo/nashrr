const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

حيآكم سيرفرنآ  هنآ كل شي تبيه  , :violin: 
 آن شآء آلله , :cd:  
  
آلرآبط : 
:arrow_right:  https://discord.gg/MpjwwRX :arrow_left:

! Citron.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حيآكم سيرفرنآ  هنآ كل شي تبيه  , :violin: 
 آن شآء آلله , :cd:  
  
آلرآبط : 
:arrow_right:  https://discord.gg/MpjwwRX :arrow_left:

! Citron.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.TOKEN);
