import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { MainTab } from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  MainScreenParamList,
  SettingsScreenParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingTab"
        component={SettingsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
const TabBarIcon = (props: { name: string; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainTabStack = createStackNavigator<MainScreenParamList>();

const MainTabNavigator = () => {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen
        name="MainScreen"
        component={MainTab}
        options={{ headerTitle: "IDEEFOGY" }}
      />
    </MainTabStack.Navigator>
  );
};

const SettingsTabStack = createStackNavigator<SettingsScreenParamList>();

const SettingsTabNavigator = () => {
  return (
    <SettingsTabStack.Navigator>
      <SettingsTabStack.Screen
        name="SettingsScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "HABITAT" }}
      />
    </SettingsTabStack.Navigator>
  );
};
