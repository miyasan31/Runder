import type { ReactNode, VFC } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

import { Text, View } from "~/components/custom";

const ErrorFallback: VFC<FallbackProps> = (props) => (
  <View>
    <Text>Something went wrong:</Text>
    <Text>{props.error.message}</Text>
  </View>
);

type Props = {
  children: ReactNode;
};

export const LayoutErrorBoundary: VFC<Props> = (props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>
);
