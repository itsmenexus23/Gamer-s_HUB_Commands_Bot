const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

client.once('ready', () => {
    console.log('BOT Is Now Online! In Game HUB!');
});

client.on ('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'command here'){  
        message.channel.send('message here');
    } else if (command == 'command here'){
        message.channel.send('message here')
    };
    if(command === 'command here'){  
        message.channel.send('message here');
    } else if (command == 'command here'){
        message.channel.send('message here')
    }
    if(command === 'command here'){  
        message.channel.send('message here');
    } else if (command == 'command here'){
        message.channel.send('message here')
    }     
    if(command === 'command here'){  
        message.channel.send('message here);
    } else if (command == 'command here'){
        message.channel.send('message here')
    }     
});


client.login('Token Here!');
