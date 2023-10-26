import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Notifications } from '../screens';
import HomeStack from './HomeStack';
import { Colors } from '../constans/colors';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveTintColor: Colors.secondary,
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}>
      <Drawer.Screen name="Home" component={HomeStack} options={{
        headerShown: false
      }} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
