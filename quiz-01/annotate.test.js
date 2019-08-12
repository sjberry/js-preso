const annotate = require('./annotate');

describe('annotate', () => {
  it('should not interfere with arithmetic operations', () => {
    const x = 5;
    const y = 6;

    const xp = annotate(x, 'x');
    const yp = annotate(y, 'y');

    expect(xp + yp).toBe(11);
  });

  it('should set the `symbol` property on the supplied value argument', () => {
    const x = 5;
    const y = 6;

    const xp = annotate(x, 'x');
    const yp = annotate(y, 'y');

    expect(`${xp.symbol} + ${yp.symbol}`).toBe('x + y');
  });
});
