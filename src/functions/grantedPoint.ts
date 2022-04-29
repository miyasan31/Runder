import type { PointTable } from '~/types/model';

// index + 1 = ランキング
export const grantedPoint = (point_table: PointTable[], index: number): number => {
  if (index + 1 >= 100) return 1;
  // index 0 ~ 5, 1位から5位まで
  if (index < 5) return point_table[index].later_point;
  // index 6 ~ , 6位以降
  const i = point_table.findIndex((point) => point.rank > index + 1);
  // indexが見つからなかった場合は最後のポイントを返す
  return i <= -1 ? point_table[point_table.length - 1].later_point : point_table[i - 1].later_point;
};
