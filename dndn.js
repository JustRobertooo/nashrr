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
:arrow_right:  https://discord.gg/MZ4b9hq :arrow_left:

! Faster Avatar.                              
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
:arrow_right:  https://discord.gg/MZ4b9hq :arrow_left:

! Faster Avatar.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NTQwOTExODI2Mjk3NDIxODM1.DzXzOw.DmMuxoynqc5Y2h6ho1thQB8jqJE');