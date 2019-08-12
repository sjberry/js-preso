const Deferred = require('./deferred');

describe('Deferred', () => {
  it('should construct a new instance with an accessible Promise instance', () => {
    const deferred = new Deferred();

    expect(deferred.promise).toBeInstanceOf(Promise);
  });

  it('should construct a new instance with an accessible resolution function', () => {
    const deferred = new Deferred();

    expect(typeof deferred.resolve).toBe('function');
  });

  it('should construct a new instance with an accessible rejection function', () => {
    const deferred = new Deferred();

    expect(typeof deferred.reject).toBe('function');
  });

  it('calls to the instance method `resolve` should resolve the underlying Promise', async () => {
    const deferred = new Deferred();
    const cb = jest.fn();

    const promise = deferred.promise.then(cb);
    deferred.resolve();

    await promise;

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('should resolve with a supplied argument', async () => {
    const deferred = new Deferred();
    const cb = jest.fn();
    const resolution = {};

    const promise = deferred.promise.then(cb);
    deferred.resolve(resolution);

    await promise;

    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith(resolution);
  });

  it('calls to the instance method `reject` should reject the underlying Promise', async () => {
    const deferred = new Deferred();
    const cb = jest.fn();

    const promise = deferred.promise.catch(cb);
    deferred.reject();

    await promise;

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('should reject with a supplied reason', async () => {
    const deferred = new Deferred();
    const cb = jest.fn();
    const reason = new Error();

    const promise = deferred.promise.catch(cb);
    deferred.reject(reason);

    await promise;

    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith(reason);
  });
});
