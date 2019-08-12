const all = require('./all');

describe('all', () => {
  it('should resolve with an array of resolved values', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2)];
    const resolution = await all(promises);

    expect(resolution).toEqual([1, 2]);
  });

  it('should reject if any supplied promise rejects', async () => {
    expect.assertions(1);

    const error = new Error('Harpooning this promise!');
    const promises = [Promise.resolve(1), Promise.reject(error)];

    try {
      await all(promises);
    } catch (err) {
      expect(err).toBe(error);
    }
  });

  it('should reject with the first supplied rejected promise', async () => {
    expect.assertions(1);

    const error1 = new Error('Harpooning this promise!');
    const error2 = new Error('Gobbled!');
    const promises = [
      Promise.resolve(1),
      Promise.reject(error1),
      Promise.reject(error2),
    ];

    try {
      await all(promises);
    } catch (err) {
      expect(err).toBe(error1);
    }
  });
});
