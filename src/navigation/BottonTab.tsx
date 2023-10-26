import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import { FontAwesome } from '@expo/vector-icons'; 
import { Colors } from '../constans/colors';

const Tab = createBottomTabNavigator();

const BottonTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarShowLabel: false,
          tabBarBadgeStyle: {
            backgroundColor: Colors.secondary,
            color: Colors.ligth,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonTab;
