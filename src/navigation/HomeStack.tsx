import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from '../screens';
import { screenOptions } from '../configs';
import BottonTab from './BottonTab';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Root" component={BottonTab} />

      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerBackTitle: 'Home',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
