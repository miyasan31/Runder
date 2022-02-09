import type { ReactNode, VFC } from "react";
import React, { useCallback, useEffect, useState } from "react";

import { Progress } from "~/components/ui/Progress";

type Props = {
  children: ReactNode;
};

export const AuthProvider: VFC<Props> = (props) => {
  const [isLoading, seIsLoading] = useState(true);

  const loadingFalse = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    seIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) seIsLoading(true);
    loadingFalse();
  }, []);

  if (isLoading) {
    return <Progress />;
  } else {
    return <>{props.children}</>;
  }
};
