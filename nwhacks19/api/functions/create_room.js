const qrcode = require('qrcode');
const idable = require('idable');

const config = require('../common/config');
const storage = require('../common/storage');

/**
* Creates a new room with random ID, returning the ID and a qr code to match
*/
module.exports = async () => {
  const room_id = idable(config.room_id_length)
  storage.add_room(room_id)
  const qr_data_url = await qrcode.toDataURL(room_id)
  return {
    room_id,
    qr_data_url,
  }
}
