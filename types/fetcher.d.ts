/**
 * Model User
 */
export type User = {
  id: number;
  name: string;
  age: number;
};

/**
 * Model Post
 */
export type Post = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  User: User;
};
