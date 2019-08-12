class Deferred {
  constructor() {
    this.promise = {
      then: () => {},
      catch: () => {},
    };
  }

  resolve(value) {}

  reject(reason) {}
}

module.exports = Deferred;
