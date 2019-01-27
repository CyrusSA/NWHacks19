const storage = require("../common/storage");
/**
 * Delete all rooms
 */
module.exports = async () => {
  await storage.clear_all();
};
