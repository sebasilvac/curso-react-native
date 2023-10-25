import { Platform, PlatformColor } from "react-native";

export const Colors = {
  //primary: "#51D0D1",
  secondary: "#5BB1AC",
  ligth: "#F9FFFF",
  gray: "#ADB3B3",
  dark: "#4B4B4B",
  ...Platform.select({
    ios: {
      primary: PlatformColor("systemBlue"),
      tertiary: PlatformColor("systemGreen"),
    },
    android: {
      primary: PlatformColor("@android:color/holo_blue_dark"),
      tertiary: PlatformColor("@android:color/holo_green_dark"),
    },
  }),
}