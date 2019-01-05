const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("528524601689505793").join(); 
    }); 



client.login("NTI5NjMzMTU2NTU5NTM2MTI4.DwzzcA._xCP6ekxmOvMpD4L_0hRoomT7R0")
