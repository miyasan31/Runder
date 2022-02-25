import { proxy } from 'valtio';

import type { User } from '~/types/fetcher';

export const user = proxy<User>({
  id: '',
  runder_id: '',
  name: '',
  email: '',
  avatar: '',
  profile: '',
  sex: 0,
  birthday: null,
  age_hierarchy: 0,
  created_at: null,
});

export const getUser = (value: User) => {
  user.id = value.id;
  user.runder_id = value.runder_id;
  user.name = value.name;
  user.email = value.email;
  user.avatar = value.avatar;
  user.profile = value.profile;
  user.sex = value.sex;
  user.birthday = value.birthday;
  user.age_hierarchy = value.age_hierarchy;
  user.created_at = value.created_at;
};

export const resetUser = () => {
  user.id = '';
  user.runder_id = '';
  user.name = '';
  user.email = '';
  user.avatar = '';
  user.profile = '';
  user.birthday = null;
  user.sex = 0;
  user.age_hierarchy = 0;
  user.created_at = null;
};
