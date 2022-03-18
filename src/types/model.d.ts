// export type Column =
//   | 'tournament'
//   | 'user'
//   | 'point'
//   | 'info'
//   | 'location'
//   | 'point_table'
//   | 'record'
//   | 'shoes'
//   | 'suggestion';

export type Term = 'Monthly' | 'Weekly' | 'Daily';

export type Tournament = {
  id: number;
  name: string;
  distance: number;
  created_at: string;
  start: string;
  end: string;
  image: string;
  count: number;
  rule: string;
  term: number;
  button_color: string;
  button_edge_color: string;
  button_image: string;
  slide_color: string;
};

// const TOURNAMENT = [
//   {
//     id: '1',
//     name: 'Winter Distance Challenge',
//     distance: 3000,
//     created_at: '2020-01-01',
//     start: '2020-01-01',
//     end: '2020-01-02',
//     image: './assets/develop/tournament.jpeg',
//     count: 10,
//     rule: "It's a long way to go, but you'll get there.",
//     term: 'Monthly',
//     button_color: '',
//     button_edge_color: '',
//     button_image: '',
//     slide_color: '',
//   },
// ];
