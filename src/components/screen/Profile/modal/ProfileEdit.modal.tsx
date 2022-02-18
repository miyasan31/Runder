import type { VFC } from 'react';

import { HalfModal } from '~/components/ui/Modal';

import { ProfileEdit } from './ProfileEdit';

type Props = {
  isVisible: boolean;
  onCloseModal: () => void;
};

export const ProfileEditModal: VFC<Props> = (props) => {
  return (
    <HalfModal {...props} size={0.9}>
      <ProfileEdit />
    </HalfModal>
  );
};
