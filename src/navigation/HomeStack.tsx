import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { Home, Settings } from '../screens';
import { CustomHeader } from '../components';
import { screenOptions } from '../configs';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      ...screenOptions,
      header: ({ navigation, route, options, back }) => (
        <CustomHeader title={route.name} />
      ),
      }
    }>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
