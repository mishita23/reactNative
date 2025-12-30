import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/Login';
import WeatherScreen from './screens/weather/weather';
import WeatherDetailsScreen from './screens/WeatherDetail/WeatherDetail';
import { WeatherData } from './components/WeatherCard/WeatherCard';

export type RootStackParamList = {
  Login: undefined;
  Weather: undefined;
  WeatherDetails: {
    weather: WeatherData;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
