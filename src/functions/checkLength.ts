export const checkLength = (day: number): string => {
  if (day.toString().length === 1) {
    return `0${day}`;
  }
  return day.toString();
};
