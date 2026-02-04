import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';
import styles from './weather.styles';

import { fetcher } from '../../api/fetcher';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { WeatherData } from '../../components/WeatherCard/Types';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { WeatherStackParamList } from '../../navigation/WeatherStackNavigator';
import WeatherCardSkeleton from '../../skeletons/WeatherCardSkeleton';

type NavigationProp = NativeStackNavigationProp<
  WeatherStackParamList,
  'WeatherHome'
>;

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [weatherData, setWeatherData] = useState<WeatherData[]>();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetcher<any>({
        url: 'https://mocki.io/v1/d651b675-ce7e-4b2d-a05d-b55fab75f55f',
        method: 'GET',
      });
      setWeatherData(response.cities);
    } finally {
      setLoading(false);
    }
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

  const renderSkeletons = () => (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <WeatherCardSkeleton key={index} />
      ))}
    </>
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
      style={styles.container }
    >
      {renderHeader()}
      {loading ? renderSkeletons() : renderWeatherList()}
    </LinearGradient>
  );
};

export default WeatherScreen;
