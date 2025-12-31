import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';
import styles from './weather.styles';

import { fetcher } from '../../api/fetcher';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { WeatherData } from '../../components/WeatherCard/Types';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Weather'>;

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [weatherData, setWeatherData] = useState<WeatherData[]>();
  const { user } = useAuth();

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const response = await fetcher<any>({
      url: 'https://mocki.io/v1/03dd0e19-d2b2-4f3b-8a45-3b3a676a2b5a',
      method: 'GET',
    });
    setWeatherData(response.cities);
  };


  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={styles.title}>Hey, {user?.firstName}</Text>
    </View>
  );

  const renderWeatherItem = ({ item }: { item: WeatherData }) => (
    <WeatherCard
      data={item}
      onPress={() =>
        navigation.navigate('WeatherDetails', {
          weather: item,
        })
      }
    />
  );

  const renderWeatherList = () => (
    <FlatList
      data={weatherData}
      keyExtractor={item => item.city}
      renderItem={renderWeatherItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );

  return (
    <LinearGradient
      colors={['#1186c1ff', '#72b9d9ff', '#F5FBFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {renderHeader()}
      {renderWeatherList()}
    </LinearGradient>
  );
};

export default WeatherScreen;
