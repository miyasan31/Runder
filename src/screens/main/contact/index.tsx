import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks";
import type { ContactStackParamList } from "~/types";

import { ContactScreen } from "./ContactScreen";

const Contact = createNativeStackNavigator<ContactStackParamList>();

export const ContactNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Contact.Navigator
      initialRouteName="ContactScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Contact.Screen name="ContactScreen" component={ContactScreen} options={() => ({})} />
    </Contact.Navigator>
  );
};
