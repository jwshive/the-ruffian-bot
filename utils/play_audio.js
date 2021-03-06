const fs = require("fs");

async function play(msg, audioFile) {
  try {
    if (fs.existsSync(`./sounds/${audioFile}`)) {
      let SHAME_MP3 = audioFile;
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(`./sounds/${SHAME_MP3}`, {
        volume: 0.5,
      });
      dispatcher.on("start", () => {
        console.log(`Playing ${SHAME_MP3}`);
      });
      dispatcher.on("finish", () => {
        console.log(`Finished playing ${SHAME_MP3}`);
        msg.member.voice.channel.leave();
      });
      dispatcher.on("error", console.error);
    } else {
      console.error(`AudioFile did not exist ./sounds/${audioFile}`);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = play;
