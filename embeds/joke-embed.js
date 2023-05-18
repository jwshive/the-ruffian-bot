const { EmbedBuilder } = require('discord.js');

function jokeEmbed(msg, data, parent) {
    if (parent == "Mom") {
        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle(data.joke)
            .setTimestamp()
            .setAuthor({name: 'Your Mom', iconURL: 'https://static.wikia.nocookie.net/americanpie/images/a/a1/Jeanine_Reunion_01.jpg/revision/latest/scale-to-width-down/340?cb=20120306085353'})
            .setFooter({text: "Are you sure you're eating enough, sweety?"});
        msg.channel.send({ embeds: [embed] });
    } else {
        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle(data.joke)
            .setTimestamp()
            .setAuthor({name: 'Your Dad', iconURL: 'https://i.pinimg.com/564x/ba/3e/4e/ba3e4e3514a74c8709c55c45b6d850b1.jpg'})
            .setFooter({text: "Hey, don't touch that thermostat."});
        msg.channel.send({ embeds: [embed] });
    };

}

module.exports = jokeEmbed;
