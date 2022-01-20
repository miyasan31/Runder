import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import type { RootStackParamList } from "types";

export const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      // Pay: {
      // 	path: "pay",
      // 	screens: {
      // 		VoiceRecord: {
      // 			path: "voice_record/:price",
      // 		},
      // 		Passcode: {
      // 			path: "passcode/:price",
      // 		},
      // 	},
      // },

      Modal: "modal",
      NotFound: "*",
    },
  },
};
