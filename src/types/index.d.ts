import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = AuthGroupStackParamList &
  RunningStackParamList & {
    Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
    NotFoundScreen: undefined;
  };
export type StackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

/* running  */
export type RunningStackParamList = {
  RunningScreen: undefined;
};

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
  NewsDetailScreen: {
    news_id: number;
  };
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
  ResultDetailScreen: {
    tournament_id: number;
    tournament_name: string;
    tournament_image_semi: string;
    tournament_start: string;
    tournament_end: string;
    tournament_term: number;
    tournament_distance: number;
    best_record: string;
  };
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
};
