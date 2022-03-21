import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import type { RootStackParamList } from '~/types';

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SignInScreen: {
        path: 'signin',
      },
      SignInEmailScreen: {
        path: 'signin/email',
      },
      SignUpScreen: {
        path: 'signup',
      },
      UserRegisterScreen: {
        path: 'user/register',
      },
      Main: {
        path: 'main',
        screens: {
          Relationship: {
            path: 'relationship',
            screens: {
              RelationshipScreen: {
                path: 'relationship',
              },
            },
          },
          Ranking: {
            path: 'ranking',
            screens: {
              RankingScreen: {
                path: 'ranking',
              },
            },
          },
          Tournament: {
            path: 'tournament',
            screens: {
              TournamentScreen: {
                path: 'tournament',
              },
            },
          },
          Result: {
            path: 'result',
            screens: {
              ResultScreen: {
                path: 'result',
              },
            },
          },
          Profile: {
            path: 'profile',
            screens: {
              ProfileScreen: {
                path: 'profile',
              },
            },
          },
        },
      },
      Development: {
        path: 'development',
        screens: {
          DevList: {
            path: 'dev_list',
            screens: {
              RunningHistoryScreen: {
                path: 'running_history',
              },
              RunningDetailScreen: {
                path: 'running_detail/:id',
              },
            },
          },
          DevRunning: {
            path: 'dev_running',
            screens: {
              RunningScreen: {
                path: 'running_screen',
              },
            },
          },
        },
      },
      NotFoundScreen: '*',
    },
  },
};
