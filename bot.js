const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Playing With your heart`,"http://twitch.tv/snowyxoxo2")
    
x5bz = "568144917650472995";
nick = "αηgєℓα";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
client.login(process.env.BOT_TOKEN);
