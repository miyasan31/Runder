/**
 * Model User
 */
export type User = {
  id: string;
  runder_id?: string | null;
  name: string;
  email?: string;
  avatar: string | null;
  profile: string | null;
  gender: number;
  birthday?: Date | null;
  age_hierarchy?: number;
  created_at?: Date | null;
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
