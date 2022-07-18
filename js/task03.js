const getRandomArray = (userLength, firstNumber, secondNumber, typeNumber) => {
  const newArray = [];
  const newArrayOdd = [];
  const newArrayEven = [];

  for (let i = 0; i < userLength; i++) {
    if (firstNumber > secondNumber) {
      let getRandomValue = Math.floor(Math.random() *
      (firstNumber - secondNumber + 1)) + secondNumber;

      if (getRandomValue % 2 === 0) {
        newArrayOdd.push(getRandomValue);
      } else {
        newArrayEven.push(getRandomValue);
      };

      newArray.push(getRandomValue);

    } else {
      let getRandomValue = Math.floor(Math.random() *
      (secondNumber - firstNumber + 1)) + firstNumber;
      newArray.push(getRandomValue);

      if (getRandomValue % 2 === 0) {
        newArrayOdd.push(getRandomValue);
      } else {
        newArrayEven.push(getRandomValue);
      };
    };
  };

  if (typeNumber === 'odd') {
    return newArrayOdd;
  } if (typeNumber === 'even') {
    return newArrayEven;
  } else {
    return newArray;
  }
};

// Не понял как я это сделал, но оно работает

console.log(getRandomArray(10, 9, 100, 'odd'));