const storage = require("../common/storage");

/**
 * Delete a room
 * @param {string} room_id
 * @param {string} song_name
 * @param {string} song_id
 */
module.exports = async (room_id, song_name, song_id) => {
  const room = await storage.get_room(room_id);
  room.playlist.push({ name: song_name, id: song_id });
  await storage.update_room(room_id, room);
};
