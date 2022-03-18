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

export type User = {
  id: string;
  runder_id: string;
  name: string;
  profile: string;
  email: string;
  avatar: string;
  birthday: Date;
  sex: number;
  age_hierarchy: number;
  created_at: Date;
};

export type Tournament = {
  id: number;
  name: string;
  distance: number;
  start: Date;
  end: Date;
  image: string;
  count: number;
  rule: string;
  term: number;
  button_color: string;
  button_edge_color: string;
  button_image: string;
  slide_color: string;
  created_at: Date;
};

export type PointTable = {
  id: number;
  tournament_id: number;
  rank: number;
  point: number;
  created_at: Date;

  tournament: Tournament;
};

export type Record = {
  id: number;
  user_id: string;
  tournament_id: number;
  location_id: number;
  record: number;
  date: Date;
  csv_path: string;
  created_at: Date;

  user: User;
  tournament: Tournament;
  location: Location;
};

export type Location = {
  id: number;
  location: LocationData[];
  created_at: Date;
};

export type LocationData = {
  color: string;
  speed: number;
  heading: number;
  accuracy: number;
  altitude: number;
  latitude: number;
  longitude: number;
  timestamp: number;
  altitudeAccuracy: number;
};
