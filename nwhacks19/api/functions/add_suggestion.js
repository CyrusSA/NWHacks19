const storage = require("../common/storage");
const lib = require("lib");

/**
 * Create a new suggestion to vote on
 * @param {string} room_id
 * @param {Object} suggestion
 */
module.exports = async (room_id, suggestion, context) => {
  await storage.add_suggestion(room_id, suggestion);
  const room = await storage.get_room(room_id);
  if (room.now_playing === null) {
    await lib[`${context.service.identifier}.play_next`](room_id);
  }
};
