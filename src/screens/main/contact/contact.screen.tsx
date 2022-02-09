import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/Contact";
import { Contact } from "~/components/screen/Contact";

export const ContactScreen: VFC<Props> = (props) => {
  return <Contact {...props} />;
};
