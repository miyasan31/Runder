import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks";
import type { ProfileStackParamList } from "~/types";

import { ProfileScreen } from "./ProfileScreen";

const Profile = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Profile.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Profile.Screen name="ProfileScreen" component={ProfileScreen} options={() => ({})} />
    </Profile.Navigator>
  );
};
