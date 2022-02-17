import type { VFC } from 'react';

import { HalfModal } from '~/components/ui/Modal';

import { TournamentDetailModalTab } from './TournamentDetailModal.tab';

type Props = {
  isVisible: boolean;
  onCloseModal: () => void;
};

export const TournamentDetailModal: VFC<Props> = (props) => {
  return (
    <HalfModal {...props} size={0.7}>
      <TournamentDetailModalTab />
    </HalfModal>
  );
};
