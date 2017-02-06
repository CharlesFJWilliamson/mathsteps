const factorQuadratic = require('../../lib/factor/factorQuadratic');
const TestUtil = require('../TestUtil');

function testFactorQuadratic(input, output) {
  TestUtil.testSimplification(factorQuadratic, input, output);
}

describe('factorQuadratic', function () {
  const tests = [
    ['x^2', 'x^2'],
    ['x^2 - 4', '(x + 2)(x - 2)'],
    ['x^2 + 2x + 1', '(x + 1)^2'],
    ['x^2 - 2x + 1', '(x - 1)^2'],
    ['x^2 + 3x + 2', '(x + 1)(x + 2)'],
    ['x^2 - 3x + 2', '(x - 1)(x - 2)'],
    ['x^2 + x - 2', '(x - 1)(x + 2)'],
    ['x^2 + 4', 'x^2 + 4'],
    ['x^2 + 4x + 1', 'x^2 + 4x + 1'],
    ['x^2 + 2x', 'x(x + 2)'],
    ['x^2 + 4 + 2^x', 'x^2 + 4 + 2^x'],
    ['-x^2 - 2x - 1', '-(x + 1)^2'],
    ['-x^2 - 3x - 2', '-(x + 1)(x + 2)'],
    ['-x^2 + 1', '-(x + 1)(x - 1)'],
  ];
  tests.forEach(t => testFactorQuadratic(t[0], t[1]));
});
