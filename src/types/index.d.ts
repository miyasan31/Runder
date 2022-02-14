import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
  Development: NavigatorScreenParams<DevelopmentTabParamList> | undefined;
  Modal: undefined;
  NotFoundScreen: undefined;
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
  Modal: undefined;
};
export type DevelopmentScreenProps<T extends keyof DevelopmentTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevelopmentTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* dev running list */
export type DevListStackParamList = {
  RunningHistoryScreen: undefined;
  RunningDetailScreen: {
    id: number;
  };
  Modal: undefined;
};
export type DevListScreenProps<T extends keyof DevListStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevListStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* dev running  */
export type DevRunningStackParamList = {
  RunningScreen: undefined;
  Modal: undefined;
};
export type DevRunningScreenProps<T extends keyof DevRunningStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<DevRunningStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

// =====================================================================
/* auth */
export type AuthStackParamList = {
  SigninScreen: undefined;
  Modal: undefined;
};
export type AuthScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

// =====================================================================
/* five tabs */
export type MainBottomTabParamList = {
  Contact: NavigatorScreenParams<ContactStackParamList> | undefined;
  Ranking: NavigatorScreenParams<RankingStackParamList> | undefined;
  Tournament: NavigatorScreenParams<TournamentStackParamList> | undefined;
  Result: NavigatorScreenParams<ResultStackParamList> | undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
};
export type MainBottomTabScreenProps<T extends keyof MainBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainBottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* contact */
export type ContactStackParamList = {
  ContactScreen: undefined;
  Modal: undefined;
};
export type ContactScreenProps<T extends keyof ContactStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ContactStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* ranking */
export type RankingStackParamList = {
  RankingScreen: undefined;
  Modal: undefined;
};
export type RankingScreenProps<T extends keyof RankingStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<RankingStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* tournament */
export type TournamentStackParamList = {
  TournamentScreen: undefined;
  Modal: undefined;
};
export type TournamentScreenProps<T extends keyof TournamentStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TournamentStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* result */
export type ResultStackParamList = {
  ResultScreen: undefined;
  Modal: undefined;
};
export type ResultScreenProps<T extends keyof ResultStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ResultStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* profile */
export type ProfileStackParamList = {
  ProfileScreen: undefined;
  Modal: undefined;
};
export type ProfileScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
