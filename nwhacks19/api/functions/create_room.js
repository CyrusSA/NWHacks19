const qrcode = require("qrcode");
const idable = require("idable");

const config = require("../common/config");
const storage = require("../common/storage");

/**
 * Creates a new room with specified name, random ID, returning the ID and a qr code to match
 * @param {string} name
 */
module.exports = async name => {
  const room_id = idable(config.room_id_length);
  const qr_data_url = await qrcode.toDataURL(room_id);
  await storage.add_room(room_id, name, qr_data_url);
  return {
    room_id,
    qr_data_url
  };
};
