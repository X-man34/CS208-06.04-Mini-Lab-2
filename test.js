import printSum from './index.js';

QUnit.test('Test with two numbers', function(assert) {

   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}`; };

   const num1 = [4, 6, 10, 2.5];
   const num2 = [2, 5.7, 4, 19];

   for (let i = 0; i < num1.length; i++) {
      const x = num1[i];
      const y = num2[i];
      const expectedOutput = `Sum is ${x + y}.`;
      printSum(x, y);
      assert.equal(actualOutput, expectedOutput, `Test printSum("${x}", "${y}")`);
      actualOutput = '';
   }
});

QUnit.test('Test with one non-number', function(assert) {

   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}`; };

   const num1 = ['nice', -6, 'cat', 2.5];
   const num2 = [24, 'hola', 14, 'rizz'];

   for (let i = 0; i < num1.length; i++) {
      const x = num1[i];
      const y = num2[i];

      const expectedOutput = isNaN(num1[i]) ? `'${x}' is not a number.` : `'${y}' is not a number.`
      printSum(x, y);
      assert.equal(actualOutput, expectedOutput, `Test printSum("${x}", "${y}")`);
      actualOutput = '';
   }
});

QUnit.test('Test with two non-numbers', function(assert) {

   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}`; };

   const num1 = ['nice', 'yassas', 'cat', 'charisma'];
   const num2 = ['cool', 'hola', 'dog', 'rizz'];

   for (let i = 0; i < num1.length; i++) {
      const x = num1[i];
      const y = num2[i];

      const expectedOutput = `'${x}' and '${y}' are not numbers.`;
      printSum(x, y);
      assert.equal(actualOutput, expectedOutput, `Test printSum("${x}", "${y}")`);
      actualOutput = '';
   }
});