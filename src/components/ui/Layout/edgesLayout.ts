export type SafeArea =
  | 'top-horizontal'
  | 'horizontal'
  | 'bottom-horizontal'
  | 'vertical-horizontal';

type Edges = ('top' | 'bottom' | 'left' | 'right')[];

export const edgesLayout = (safeArea?: SafeArea): Edges => {
  switch (safeArea) {
    case 'top-horizontal':
      return ['top', 'left', 'right'];
    case 'bottom-horizontal':
      return ['bottom', 'left', 'right'];
    case 'horizontal':
      return ['left', 'right'];
    case 'vertical-horizontal':
      return ['top', 'bottom', 'left', 'right'];
    default:
      return ['top', 'bottom', 'left', 'right'];
  }
};
