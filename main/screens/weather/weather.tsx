import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';
import styles from './weather.styles';
import WeatherCard, {
  WeatherData,
} from '../../components/WeatherCard/WeatherCard';
import { TemperatureUnit } from '../../utils/temperature';
import { fetcher } from '../../api/fetcher';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Weather'>;

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [unit, setUnit] = useState<TemperatureUnit>('C');
  const [weatherData, setWeatherData] = useState<WeatherData[]>();
    const { user } = useAuth();
  const fetchWeather = async () => {
    const response = await fetcher<any>({
      url: 'https://mocki.io/v1/03dd0e19-d2b2-4f3b-8a45-3b3a676a2b5a',
      method: 'GET',
    });
    setWeatherData(response.cities);
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  const isFahrenheit = unit === 'F';
  return (
    <LinearGradient
          colors={['#1186c1ff', '#72b9d9ff', '#F5FBFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
  
      <View style={styles.headerRow}>
        <Text style={styles.title}>Hey, {user?.firstName}</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>°C</Text>

          <Switch
            value={isFahrenheit}
            onValueChange={value => setUnit(value ? 'F' : 'C')}
            trackColor={{ false: '#ccc', true: '#FFA500' }}
            thumbColor="#fff"
          />

          <Text style={styles.switchLabel}>°F</Text>
        </View>
      </View>
      <FlatList
        data={weatherData}
        keyExtractor={item => item.city}
        renderItem={({ item }) => (
          <WeatherCard
            data={item}
            unit={unit}
            onPress={() =>
              navigation.navigate('WeatherDetails', {
                weather: item,
                unit,
              })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </LinearGradient>
  );
};

export default WeatherScreen;
