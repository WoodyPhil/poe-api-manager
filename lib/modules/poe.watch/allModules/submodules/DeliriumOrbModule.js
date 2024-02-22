const getData = require("../functions/getData");

class DeliriumOrbModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `currency${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = DeliriumOrbModule;