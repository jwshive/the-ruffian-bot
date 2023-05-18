const fs = require("fs");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, entersState, StreamType, VoiceConnectionStatus } = require('@discordjs/voice');

async function play(msg, audioFile) {
  try {
    if (fs.existsSync(`./sounds/${audioFile}`)) {
    await playSound(`./sounds/${audioFile}`);
    const connection = await connectToChannel(msg.member.voice.channel)
    } else {
      console.error(`AudioFile did not exist ./sounds/${audioFile}`);
    }
  } catch (err) {
    console.error(err);
  }
}

function playSound(audioFile, player) {
    const player = createAudioPlayer();
    const resource = createAudioResource(`./sounds/${audioFile}`, {
		inputType: StreamType.Arbitrary,
	});
	player.play(resource);
	return entersState(player, AudioPlayerStatus.Playing, 5e3);
}

async function connectToChannel(channel) {
    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildID: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
      });
}

module.exports = play;
