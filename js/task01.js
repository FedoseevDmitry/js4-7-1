const getRandomArray = (userLength) => {
  const newArray = [];

  for (let i = 0; i < userLength; i++) {
    let getRandomValue = Math.floor(Math.random(100) * 100);
    
    newArray.push(getRandomValue);
  };

  return newArray;
};

console.log(`Ваш случайным массив:
${getRandomArray(Number(prompt('Введите нужную длину массива: ', 10)))}`);