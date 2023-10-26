import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import MyDrawer from './Drawer';


const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}

export default RootNavigator;