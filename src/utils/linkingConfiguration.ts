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
          Contact: {
            path: 'contact',
            screens: {
              ContactScreen: {
                path: 'contact',
              },
              Modal: {
                path: 'modal',
              },
            },
          },
          Ranking: {
            path: 'ranking',
            screens: {
              RankingScreen: {
                path: 'ranking',
              },
              Modal: {
                path: 'modal',
              },
            },
          },
          Tournament: {
            path: 'tournament',
            screens: {
              TournamentScreen: {
                path: 'tournament',
              },
              Modal: {
                path: 'modal',
              },
            },
          },
          Result: {
            path: 'result',
            screens: {
              ResultScreen: {
                path: 'result',
              },
              Modal: {
                path: 'modal',
              },
            },
          },
          Profile: {
            path: 'profile',
            screens: {
              ProfileScreen: {
                path: 'profile',
              },
              Modal: {
                path: 'modal',
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
      Modal: {
        path: 'modal',
      },
      NotFoundScreen: '*',
    },
  },
};
