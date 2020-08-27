import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              MainTab: "one",
            },
          },
          TabTwo: {
            screens: {
              SettingsTab: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
