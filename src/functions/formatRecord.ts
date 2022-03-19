const formatDecimalCalculation = (s: number, n: number) => {
  const ss = '' + s;
  return '0'.repeat(Math.max(0, n - ss.length)) + s;
};

export const formatRecord = (record?: number) => {
  if (!record) return null;
  const t = Math.abs(record);
  const ms = t % 1000;
  const sec = Math.floor(t / 1000) % 60;
  const min = Math.floor(t / 60000);
  return `${record < 0 ? '-' : ''}${formatDecimalCalculation(min, 2)}:${formatDecimalCalculation(
    sec,
    2,
  )}.${formatDecimalCalculation(ms, 3)}`;
};
