import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabScreenProps> | undefined;
  Modal: undefined;
  NotFound: undefined;
};
export type StackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

/* tabs */
export type BottomTabParamList = {
  TabOne: NavigatorScreenParams<TabOneStackParamList> | undefined;
  TabTwo: NavigatorScreenParams<TabTwoStackParamList> | undefined;
  TabThree: NavigatorScreenParams<TabThreeStackParamList> | undefined;
};
export type BottomTabScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
/* ---- */

/* tab1 */
export type TabOneStackParamList = {
  TabOneScreen: undefined;
};
export type TabOneScreenProps<T extends keyof TabOneStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabOneStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
/* ---- */

/* tab2 */
export type TabTwoStackParamList = {
  TabTwoScreen: undefined;
};
export type TabTwoScreenProps<T extends keyof TabTwoStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabTwoStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
/* ---- */

/* tab3 */
export type TabThreeStackParamList = {
  TabThreeScreen: undefined;
};
export type TabThreeScreenProps<T extends keyof TabThreeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabThreeStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
/* ---- */
