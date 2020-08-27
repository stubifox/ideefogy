import { Font5Icon, OcticonIcon } from "../components/Icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { MainTab } from "../screens/MainTabScreen";
import TabTwoScreen from "../screens/SettingsTabScreen";
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
          tabBarIcon: ({ color }) => <Font5Icon name="gifts" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SettingTab"
        component={SettingsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <OcticonIcon name="settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
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
