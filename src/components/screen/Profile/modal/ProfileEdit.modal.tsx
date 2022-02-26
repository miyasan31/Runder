import type { FC } from 'react';

import { HalfModal } from '~/components/ui/Modal';

import { ProfileEdit } from './ProfileEdit';

type Props = {
  isVisible: boolean;
  onCloseModal: () => void;
};

export const ProfileEditModal: FC<Props> = (props) => {
  return (
    <HalfModal {...props} size={0.9}>
      <ProfileEdit />
    </HalfModal>
  );
};
