import { Assets, Colors, Spacings, ThemeManager, Typography } from "react-native-ui-lib";

const isSmallScreen = false;

export const colorUtils = () => {
  Colors.loadColors({
    pink: "#FF69B4",
    gold: "#FFD700",
  });

  Colors.loadSchemes({
    light: {
      screenBG: "transparent",
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
    },
    dark: {
      screenBG: Colors.grey10,
      textColor: Colors.white,
      moonOrSun: Colors.grey80,
      mountainForeground: Colors.violet10,
      mountainBackground: Colors.violet20,
    },
  });
};

export const typographyUtils = () => {
  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 },
  });

  Spacings.loadSpacings({
    page: isSmallScreen ? 16 : 20,
  });
};

export const assetsUtils = () => {
  Assets.loadAssetsGroup("icons", {
    icon1: require("icon1.png"),
    icon2: require("icon2.png"),
    icon3: require("icon3.png"),
  });

  // or as a nested group to create your own hierarchy
  Assets.loadAssetsGroup("illustrations.placeholders", {
    emptyCart: require("emptyCart.png"),
    emptyProduct: require("emptyProduct.png"),
  });

  Assets.loadAssetsGroup("illustrations.emptyStates.", {
    noMessages: require("noMessages.png"),
    noContacts: require("noContacts.png"),
  });
};

export const themeUtils = () => {
  ThemeManager.setComponentTheme("Text", {
    text70: true, // will set the text70 typography modifier prop to be true by default
    grey10: true, // will set the grey10 color modifier prop to be true by default
  });

  ThemeManager.setComponentTheme("Button", (props: any, _context: any) => {
    return {
      // this will apply a different backgroundColor
      // depending on whether the Button has an outline or not
      backgroundColor: props.outline ? "black" : "green",
    };
  });
};
