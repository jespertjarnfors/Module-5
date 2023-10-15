class Logging {
    constructor() {
      }
      log = (id, value) => {
        console.log(`[Calculator ID:${id}, value:${value}]`);
      };
}

module.exports = Logging;