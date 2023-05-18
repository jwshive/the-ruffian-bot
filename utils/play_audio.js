const { createAudioPlayer, joinVoiceChannel, VoiceConnectionStatus, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');

const audioPlayer = createAudioPlayer();

function playMusic(message, audioFile) {
    const channelOfFollowedMember = message.member.voice.channel
    if(!channelOfFollowedMember){ return }
    voiceConnection = joinVoiceChannel({
        channelId: channelOfFollowedMember.id,
        guildId: String(channelOfFollowedMember.guild.id),
        adapterCreator: channelOfFollowedMember.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    })
    voiceConnection?.on(VoiceConnectionStatus.Ready, (oldState, newState) => {
        console.log(`Playing ${audioFile}`);
        if(voiceConnection) {
            const resource = createAudioResource(`./sounds/${audioFile}`, { inlineVolume: true });
            resource.volume.setVolume(0.5);
            const subscription = voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(resource);

            audioPlayer.on(AudioPlayerStatus.Idle, () => {voiceConnection.disconnect()})
        }
    });
};

module.exports = playMusic;