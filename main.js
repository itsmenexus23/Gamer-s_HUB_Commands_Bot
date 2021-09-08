const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

client.once('ready', () => {
    console.log('Samaritan#1544 Is Now Online! In Game HUB!');
});

client.on ('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'discinv'){  
        message.channel.send('https://discord.io/gamingshub');
    } else if (command == 'moaptwiton'){
        message.channel.send('Moapilaw is now streaming at https://www.twitch.tv/moapilaw @everyone')
    };
    if(command === 'discbotmake1'){  
        message.channel.send('Watch this video! Making Discord BOT! https://www.youtube.com/watch?v=j_sD9udZnCk');
    } else if (command == 'mcip2'){
        message.channel.send('')
    }
    if(command === 'mcaternos1'){  
        message.channel.send('Paste in minecraft direct Connect: RediazDaulatDelacorg.aternos.me:13898');
    } else if (command == 'ip'){
        message.channel.send('CMD + ipconfig')
    }     
    if(command === 'btversion'){  
        message.channel.send('Samaritan#1544 is on Version ' + Discord.version);
    } else if (command == 'finnstron'){
        message.channel.send('Its Just Me Nexus is now streaming at https://www.twitch.tv/itsmenexus23 @everyone')
    }     
});


client.login('ODA4OTYyMTEyNzUwNjE2NTc3.YCOKrQ.72iQ5UfjEd5IooBV9n2sDOWUaas');
