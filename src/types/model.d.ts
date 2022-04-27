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

// export type User = {
//   id: string;
//   runder_id: string;
//   name: string;
//   profile: string;
//   email: string;
//   avatar: string;
//   birthday: Date;
//   sex: number;
//   age_hierarchy: number;
//   created_at: Date;
// };

// export type Tournament = {
//   id: number;
//   name: string;
//   distance: number;
//   start: Date;
//   end: Date;
//   image: string;
//   count: number;
//   rule: string;
//   term: number;
//   button_color: string;
//   button_edge_color: string;
//   button_image: string;
//   slide_color: string;
//   created_at: Date;
// };

// export type PointTable = {
//   id: number;
//   tournament_id: number;
//   rank: number;
//   point: number;
//   created_at: Date;

//   tournament: Tournament;
// };

// export type Record = {
//   id: number;
//   user_id: string;
//   tournament_id: number;
//   location_id: number;
//   record: number;
//   date: Date;
//   csv_path: string;
//   created_at: Date;

//   user: User;
//   tournament: Tournament;
//   location: Location;
// };

// export type Location = {
//   id: number;
//   location: LocationData[];
//   created_at: Date;
// };

// ==============================

/**
 * Model user
 *
 */
export type User = {
  id: string;
  name: string;
  runder_id: string;
  email: string;
  sex: number;
  birthday: Date;
  age_hierarchy: number;
  profile: string;
  avatar: string;
  created_at: Date;
};

/**
 * Model shoes
 *
 */
export type Shoes = {
  id: number;
  user_id: string;
  shoes: string;
  brand: string;
  created_at: Date;

  user: User;
};

/**
 * Model tournament
 *
 */
export type Tournament = {
  id: number;
  name: string;
  start: Date;
  end: Date;
  term: number;
  distance: number;
  count: number;
  rule: string;
  created_at: Date;

  tournament_design: TournamentDesign[];
};

/**
 * Model tournament_design
 *
 */
export type TournamentDesign = {
  id: number;
  tournament_id: number;
  image_full: string;
  image_semi: string;
  image_text_color: string | null;
  button_edge_color: string | null;
  button_image: string | null;
  button_slide_color: string | null;
  button_color: string | null;
  created_at: Date;
};

/**
 * Model record
 *
 */
export type Record = {
  id: number;
  user_id: string;
  tournament_id: number;
  location_id: number;
  record: number;
  isBest: boolean;
  created_at: Date;

  user: User;
  tournament: Tournament;
  location: Location;
};

/**
 * Model point
 *
 */
export type Point = {
  id: number;
  user_id: string;
  tournament_id: number;
  point_id: number;
  created_at: Date;

  user: User;
  tournament: Tournament;
  point: Point;
};

/**
 * Model point_table
 *
 */
export type PointTable = {
  id: number;
  tournament_id: number;
  rank: number;
  later_point: number;
  created_at: Date;

  tournament: Tournament;
};

/**
 * Model suggestion
 *
 */
export type Suggestion = {
  id: number;
  user_id: string;
  contents: string;
  created_at: Date;

  user: User;
};

/**
 * Model info
 *
 */
export type Info = {
  id: number;
  title: string;
  contents: string;
  image: string;
  created_at: Date;
};

/**
 * Model location
 *
 */
export type Location = {
  id: number;
  location: LocationData[];
  created_at: Date;
};

/**
 * Model location_data
 *
 */
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
