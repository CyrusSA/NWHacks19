const storage = require('../common/storage');

/**
* Poll a room to view the playlist, current votes, etc
* @param {string} room_id
*/
module.exports = async (room_id) => {
  return await kv.get({key: room_id});
};
