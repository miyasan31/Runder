export const calculateLeapYear = (year: number) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29;
  return 28;
};

export const calculateEndOfThisMonth = (year: number, month: number) => {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return calculateLeapYear(year);
    default:
      return 31;
  }
};
