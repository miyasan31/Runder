import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Development: NavigatorScreenParams<DevelopmentTabParamList> | undefined;
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  Main: NavigatorScreenParams<BottomTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};
export type StackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

// =====================================================================
/* development tabs */
export type DevelopmentTabParamList = {
  DevList: NavigatorScreenParams<DevListStackParamList> | undefined;
  DevRunning: NavigatorScreenParams<DevRunningStackParamList> | undefined;
};
export type DevelopmentScreenProps<T extends keyof DevelopmentTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevelopmentTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* dev running list */
export type DevListStackParamList = {
  RunningHistory: undefined;
  RunningDetail: {
    id: number;
  };
};
export type DevListScreenProps<T extends keyof DevListStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevListStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* dev running  */
export type DevRunningStackParamList = {
  RunningScreen: undefined;
};
export type DevRunningScreenProps<T extends keyof DevRunningStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevRunningStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

// =====================================================================
/* auth */
export type AuthStackParamList = {
  SigninScreen: undefined;
};
export type AuthScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

// =====================================================================
/* five tabs */
export type BottomTabParamList = {
  Contact: NavigatorScreenParams<ContactStackParamList> | undefined;
  Ranking: NavigatorScreenParams<RankingStackParamList> | undefined;
  Tounament: NavigatorScreenParams<TounamentStackParamList> | undefined;
  Result: NavigatorScreenParams<ResultStackParamList> | undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
};
export type BottomTabScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* contact */
export type ContactStackParamList = {
  ContactScreen: undefined;
};
export type ContactScreenProps<T extends keyof ContactStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ContactStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* ranking */
export type RankingStackParamList = {
  RankingScreen: undefined;
};
export type RankingScreenProps<T extends keyof RankingStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<RankingStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* tounament */
export type TounamentStackParamList = {
  TounamentScreen: undefined;
};
export type TounamentScreenProps<T extends keyof TounamentStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TounamentStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* result */
export type ResultStackParamList = {
  ResultScreen: undefined;
};
export type ResultScreenProps<T extends keyof ResultStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ResultStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* profile */
export type ProfileStackParamList = {
  ProfileScreen: undefined;
};
export type ProfileScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
