import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WeatherData } from '../components/WeatherCard/Types';
import WeatherScreen from '../screens/weather/weather';
import WeatherDetailsScreen from '../screens/WeatherDetail/WeatherDetail';

export type WeatherStackParamList = {
  WeatherHome: undefined;
  WeatherDetails: {
    weather: WeatherData;
  };
};

const Stack = createNativeStackNavigator<WeatherStackParamList>();

const WeatherStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="WeatherHome"
        component={WeatherScreen}
        options={{
          title: 'Weather',
        }}
      />
      <Stack.Screen
        name="WeatherDetails"
        component={WeatherDetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default WeatherStackNavigator;
