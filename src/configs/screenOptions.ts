import { StackNavigationOptions } from "@react-navigation/stack";

const screenOptions: StackNavigationOptions = {
  headerShown: true, // default
  headerTitleAlign: 'center',
  // title: 'OtherTitle',
  // headerStyle: {
  //   backgroundColor: Colors.tertiary,
  // },
  // headerTintColor: '#fff',
  // presentation: 'transparentModal',
  // presentation: 'modal',
  presentation: 'card',
  //gestureEnabled: false,
  keyboardHandlingEnabled: true,
};

export default screenOptions;