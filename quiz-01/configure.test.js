const configure = require('./configure');

describe('configure', () => {
  it('should return an object result with the property `cool` set to the provided value', () => {
    const options = {};
    const result = configure(options, 'beans');

    expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
    expect(result.cool).toBe('beans');
  });

  it('should not modify the supplied argument', () => {
    const options = {};

    const result1 = configure(options, 'beans');
    const result2 = configure(options, 'story');

    expect(result1.cool).toBe('beans');
    expect(result2.cool).toBe('story');
  });
});
