const storage = require("../common/storage");
const lib = require("lib");

/**
 * Create a new suggestion to vote on
 * @param {string} room_id
 * @param {string} name
 * @param {string} id
 */
module.exports = async (room_id, name, id) => {
  await storage.add_suggestion(room_id, name, id);
  const room = await storage.get_room(room_id);
  if (room.now_playing === null) {
    await lib[`nwhacks19.api[@local].play_next`](room_id);
  }
};
