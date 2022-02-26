import type { FC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/modal/Modal';
import { Modal } from '~/components/screen/modal/Modal';

export const ModalScreen: FC<Props> = (props) => {
  return <Modal {...props} />;
};
