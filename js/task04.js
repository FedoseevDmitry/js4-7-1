const isLeapYear = (yearStart, yearEnd) => {
  const learYears = [];

  if (yearStart > yearEnd) {

    for (let i = yearEnd; i <= yearStart; i++) {

      if ((i % 400 === 0) || (i % 100 !== 0 && i % 4 === 0)) {

        learYears.push(i);
      };
    };
  } if (yearStart < yearEnd) {
    for (let i = yearStart; i <= yearEnd; i++) {

      if ((i % 400 === 0) || (i % 100 !== 0 && i % 4 === 0)) {

        learYears.push(i);
      };
    };
  };

  return learYears;
};

console.log(isLeapYear(1900, 2000));