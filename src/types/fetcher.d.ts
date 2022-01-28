/**
 * Model User
 */
export type User = {
  id: number;
  name: string;
  created_at: Date;
};

/**
 * Model Location
 */
export type Location = {
  id: number;
  location: LocationResult[];
  created_at: Date;
};

export type LocationResult = {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
  timestamp: number | null;
  color: string;
};
