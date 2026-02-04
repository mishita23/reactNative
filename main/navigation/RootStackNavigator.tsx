import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login/Login';
import WeatherStackNavigator from './WeatherStackNavigator';
import ToDoScreen from '../screens/ToDo/ToDo';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import HealthProfileScreen from '../screens/HealthProfileScreen/HealthPRofileScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import DummyScreen from '../screens/DummyScreens/DummyScreen';
import HealthStackNavigator from './HealthStackNavigator';
import { navigationRef } from './NacigationRef';

export type RootStackParamList = {
  Login: undefined;
  HomeDrawer: undefined;

  Weather: undefined;
  Health: undefined;
  Todo: undefined;

  Profile: undefined;
  FAQ: undefined;
  AboutUs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
        <Stack.Screen name="Weather" component={WeatherStackNavigator} />
        <Stack.Screen name="Health" component={HealthStackNavigator} />
        <Stack.Screen name="Todo" component={ToDoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FAQ" component={DummyScreen} />
        <Stack.Screen name="AboutUs" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
