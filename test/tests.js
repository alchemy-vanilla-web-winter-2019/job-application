import removeWhiteSpace from '../src/functions/remove-white-space.js';

const test = QUnit.test;

test('remove white space between words', function(assert) {
    const input = 'lauren weiss yes';
    const expected = 'laurenweissyes';
    const result = removeWhiteSpace(input);
    assert.equal(result, expected);
});