const delay = require('../tests/helpers/delay');

const throttle = require('./throttle');

describe('configure', () => {
  it('should return a wrapped callback', () => {
    const cb = jest.fn();
    const throttled = throttle(cb, 50);

    expect(typeof throttled).toBe('function');
  });

  it('should prevent additional calls within interval', () => {
    const cb = jest.fn();
    const throttled = throttle(cb, 50);

    for (let i = 0; i < 5; i++) {
      throttled();
    }

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('should preserve callback arguments', () => {
    const cb = jest.fn();
    const throttled = throttle(cb, 50);

    throttled(1, 2, 3);

    expect(cb).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should allow additional calls after interval', async () => {
    const cb = jest.fn();
    const throttled = throttle(cb, 5);

    throttled();

    await delay(10);

    throttled();

    expect(cb).toHaveBeenCalledTimes(2);
  });
});
