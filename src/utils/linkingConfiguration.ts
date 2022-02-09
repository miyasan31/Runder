import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import type { RootStackParamList } from "~/types";

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Auth: {
        path: "auth",
        screens: {
          SigninScreen: {
            path: "signin",
          },
        },
      },
      Main: {
        path: "main",
        screens: {
          Contact: {
            path: "contact",
            screens: {
              ContactScreen: {
                path: "contact",
              },
              Modal: {
                path: "modal",
              },
            },
          },
          Ranking: {
            path: "ranking",
            screens: {
              RankingScreen: {
                path: "ranking",
              },
              Modal: {
                path: "modal",
              },
            },
          },
          Tounament: {
            path: "tounament",
            screens: {
              TounamentScreen: {
                path: "tounament",
              },
              Modal: {
                path: "modal",
              },
            },
          },
          Result: {
            path: "result",
            screens: {
              ResultScreen: {
                path: "result",
              },
              Modal: {
                path: "modal",
              },
            },
          },
          Profile: {
            path: "profile",
            screens: {
              ProfileScreen: {
                path: "profile",
              },
              Modal: {
                path: "modal",
              },
            },
          },
        },
      },
      Development: {
        path: "development",
        screens: {
          DevList: {
            path: "devlist",
            screens: {
              RunningHistoryScreen: {
                path: "runninghistory",
              },
              RunningDetailScreen: {
                path: "runningdetail/:id",
              },
            },
          },
          DevRunning: {
            path: "devrunning",
            screens: {
              RunningScreen: {
                path: "runningscreen",
              },
            },
          },
        },
      },
      Modal: {
        path: "modal",
      },
      NotFoundScreen: "*",
    },
  },
};
