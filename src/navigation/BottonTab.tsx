import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import { FontAwesome } from '@expo/vector-icons'; 
import { Colors } from '../constans/colors';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottonTab = ({navigation}: any) => {

  // const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.secondary,
        headerLeft: ({tintColor}) => (
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <FontAwesome
              name="bars"
              size={24}
              //color={Colors.secondary}
              color={tintColor}
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        ),
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
