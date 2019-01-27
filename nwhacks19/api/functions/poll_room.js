const storage = require("../common/storage");
const roomUtil = require("../common/room-util");

/**
 * Poll a room to view the playlist, current votes, etc
 * @param {string} room_id
 */
module.exports = async room_id => {
  const room = await storage.get_room(room_id);
  return {
    ...room,
    next_playing: roomUtil.findBest(room)
  };
};
