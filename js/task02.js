const getRandomArray = (userLength, firstNumber, secondNumber) => {
  const newArray = [];

  for (let i = 0; i < userLength; i++) {
    if (firstNumber > secondNumber) {
      let getRandomValue = Math.floor(Math.random() *
      (firstNumber - secondNumber + 1)) + secondNumber;
      newArray.push(getRandomValue);
    } else {
      let getRandomValue = Math.floor(Math.random() *
      (secondNumber - firstNumber + 1)) + firstNumber;
      newArray.push(getRandomValue);
    };
  };

  return newArray;
};

console.log(getRandomArray(5, 95, 100));