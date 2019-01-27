const storage = require('../common/storage')

/**
* Remove the first item of the playlist (call after each song is done)
* @param {string} room_id
*/
module.exports = async (room_id) => { // TODO: additional secret key parameter to restrict this to the room owner
  await storage.shift_playlist(room_id);
  return true
}
