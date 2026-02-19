function printSum(x, y) {
  const xNum = parseFloat(x);
  const yNum = parseFloat(y);
  const xInvalid = isNaN(xNum);
  const yInvalid = isNaN(yNum);

  if (xInvalid && yInvalid) {
    console.log(`'${x}' and '${y}' are not numbers.`);
    return;
  }

  if (xInvalid) {
    console.log(`'${x}' is not a number.`);
    return;
  }

  if (yInvalid) {
    console.log(`'${y}' is not a number.`);
    return;
  }

  console.log(`Sum is ${xNum + yNum}.`);
}

export default printSum;
