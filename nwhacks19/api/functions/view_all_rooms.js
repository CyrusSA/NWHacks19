const storage = require("../common/storage");

/**
 * View all rooms
 */
module.exports = async () => {
  return await storage.get_all();
};
