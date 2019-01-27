const storage = require("../common/storage");
/**
 * Delete a room
 * @param {string} room_id
 */
module.exports = async room_id => {
  await storage.clear_room(room_id);
};
