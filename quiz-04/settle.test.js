const settle = require('./settle');

describe('settle', () => {
  it('should resolve after all underlying promises resolve and capture their values', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2)];
    const resolution = await settle(promises);

    expect(resolution).toEqual([
      {
        fulfilled: true,
        value: 1,
      },
      {
        fulfilled: true,
        value: 2,
      },
    ]);
  });

  it('should resolve even with underlying rejected promises and capture rejection reasons', async () => {
    const error = new Error('Harpooning this promise!');
    const promises = [Promise.resolve(1), Promise.reject(error)];
    const resolution = await settle(promises);

    expect(resolution).toEqual([
      {
        fulfilled: true,
        value: 1,
      },
      {
        fulfilled: false,
        reason: error,
      },
    ]);
  });
});
