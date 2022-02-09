import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/modal/Modal";
import { Modal } from "~/components/screen/modal/Modal";

export const ModalScreen: VFC<Props> = (props) => {
  return <Modal {...props} />;
};
