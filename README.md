# CS208-07.04-Mini-Lab-2

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=1117900820&ref=master&geo=UsWest)

Complete the printSum() function in index.js. The function has x and y parameters, which are assigned with strings when printSum() is called. 
If the strings can be converted into numbers, printSum() should output a message with the numbers' sum to the console.

Ex: printSum("3", "6") outputs the sum of 3 + 6 to the console:

    Sum is 9.


If one of the arguments is not a number, then printSum() should output which argument is not a number.

Ex: printSum("hello", "6") outputs:

    'hello' is not a number.


If both arguments are not numbers, printSum() should indicate so.

Ex: printSum("hello", "hi") outputs:

    'hello' and 'hi' are not numbers.

Hint: Use JavaScript functions isNaN() and parseFloat() in your solution.
