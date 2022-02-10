import { Colors, Spacings, ThemeManager, Typography } from "react-native-ui-lib";

import { useColorScheme } from "~/hooks/useColorScheme";

const isSmallScreen = false;

// const customeTypography = {};

// const customeSpacing = {
//   page: isSmallScreen ? 16 : 20,
// };

// light:dark 共通カラー
// const customeColor = {
//   "text-main": "#333333",
//   "text-sub": "#808080",
//   "text-thin": "#DDDDDD",
//   primary: "#19EC9C",
//   accent: "#4BB4FF",
//   bg100: "#FFFFFF",
//   backgroundDefault: "#F5F5F5",
// };

const customeTheme = {
  light: {
    "1": "#FFFFFF", // bg-100
    "2": "#DDDDDD", // bg-200
    "3": "#FAFAFA", // bg-300
    text1: "#FFFFFF", // text-000
    text2: "#333333", // text-100
    text3: "#808080", // text-200
    text4: "#DDDDDD", // text-300
    "21": "#BBBBBB", // border-100
    "31": "#DDDDDD", // icon-100
    primary: "#19EC9C",
    accent: "#4BB4FF",
  },
  dark: {
    "1": "#404852",
    "2": "#5A6471",
    "3": "#373E46",
    text1: "#404852",
    text2: "#FFFFFF",
    text3: "#BBBBBB",
    text4: "#5A6471",
    "21": "#7D8B9C",
    "31": "#5A6471",
    primary: "#24D995",
    accent: "#47ADF5",
  },
};

export type CustomeThemeType = typeof customeTheme[keyof typeof customeTheme];
export type CustomeTheme = keyof typeof customeTheme[keyof typeof customeTheme];
export type BackgroundTheme = Extract<CustomeTheme, "1" | "2" | "3">;
export type TextTheme = Extract<CustomeTheme, "text1" | "text2" | "text3" | "text4">;
export type BorderTheme = Extract<CustomeTheme, "21">;
export type IconTheme = Extract<CustomeTheme, "31">;
export type ColorTheme = Extract<CustomeTheme, "primary" | "accent">;

export const styleThemeConfig = () => {
  // Colors.loadColors(customeColor);
  // Colors.loadSchemes(customeTheme);
  // Typography.loadTypographies(customeTypography);
  // Spacings.loadSpacings(customeSpacing);
};

export const themeUtils = () => {
  ThemeManager.setComponentTheme("Text", {
    text70: true,
    grey10: true,
  });

  ThemeManager.setComponentTheme("Button", (props: any, _context: any) => {
    return {
      backgroundColor: props.outline ? "black" : "green",
    };
  });
};

// export const assetsUtils = () => {
//   Assets.loadAssetsGroup("icons", {
//     icon1: require("icon1.png"),
//     icon2: require("icon2.png"),
//     icon3: require("icon3.png"),
//   });

//   // or as a nested group to create your own hierarchy
//   Assets.loadAssetsGroup("illustrations.placeholders", {
//     emptyCart: require("emptyCart.png"),
//     emptyProduct: require("emptyProduct.png"),
//   });

//   Assets.loadAssetsGroup("illustrations.emptyStates.", {
//     noMessages: require("noMessages.png"),
//     noContacts: require("noContacts.png"),
//   });
// };

export const useThemeColor = (
  themeProps: { light?: string; dark?: string },
  themeName: keyof typeof customeTheme.light & keyof typeof customeTheme.dark,
) => {
  const themeColor = useColorScheme();
  const colorFromProps = themeProps[themeColor];
  return colorFromProps || customeTheme[themeColor][themeName];
};
