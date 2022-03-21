import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = AuthGroupStackParamList & {
  Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
  Development: NavigatorScreenParams<DevelopmentTabParamList> | undefined;
  NotFoundScreen: undefined;
};
export type StackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

/* auth */
export type AuthGroupStackParamList = {
  SignInScreen: undefined;
  SignInEmailScreen: undefined;
  SignUpScreen: undefined;
  UserRegisterScreen: undefined;
};

/* tabs */
export type MainBottomTabParamList = {
  Relationship: NavigatorScreenParams<RelationshipStackParamList> | undefined;
  Ranking: NavigatorScreenParams<RankingStackParamList> | undefined;
  Tournament: NavigatorScreenParams<TournamentStackParamList> | undefined;
  Result: NavigatorScreenParams<ResultStackParamList> | undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
};
export type MainBottomTabScreenProps<T extends keyof MainBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainBottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* Relationship */
export type RelationshipStackParamList = {
  RelationshipScreen: undefined;
};
export type RelationshipScreenProps<T extends keyof RelationshipStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RelationshipStackParamList, T>,
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

/* tournament */
export type TournamentStackParamList = {
  TournamentScreen: undefined;
  TournamentDetailScreen: {
    tournament_id: number;
  };
  ChallengeDetailScreen: {
    tournament_id: number;
  };
};
export type TournamentScreenProps<T extends keyof TournamentStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TournamentStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* result */
export type ResultStackParamList = {
  ResultScreen: undefined;
  ResultDetailScreen: undefined;
};
export type ResultScreenProps<T extends keyof ResultStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ResultStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* profile */
export type ProfileStackParamList = SettingGroupStackParamList & {
  ProfileScreen: undefined;
  ProfileEditScreen: undefined;
  AvatarEditScreen: undefined;
};
export type ProfileScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

/* setting group */
export type SettingGroupStackParamList = {
  SettingScreen: undefined;
  ThemeScreen: undefined;
  PrivacyScreen: undefined;
  TermsScreen: undefined;
  ContactScreen: undefined;
  AccountDeletionScreen: undefined;
  AccountDeletionConfirmationScreen: undefined;
};

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
  RunningHistoryScreen: undefined;
  RunningDetailScreen: {
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
