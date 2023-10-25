import { createStackNavigator } from '@react-navigation/stack';
import { Home, Settings } from '../screens';
import { CustomHeader } from '../components';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: true,// default
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
        header: ({ navigation, route, options, back }) => <CustomHeader title={route.name} />,
      }}
    
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
