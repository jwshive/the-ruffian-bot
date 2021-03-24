const Guest = require("../models/Guest");

function logGuestMember(member) {
  // Log User to Mongo Table
  const guest = new Guest({
    guest_discord_id: member.user.id,
    guest_discord_username: member.user.username,
    guest_discord_discriminator: member.user.discriminator,
    joined_timestamp: member.joinedTimestamp,
  });
  guest
    .save()
    .then((result) => {
      console.info(`Saved new guest ${result}`);
    })
    .catch((err) => {
      console.log(err.code);
      console.log(`Guest Save Error: ${err}`);
    });
}

module.exports = logGuestMember;
