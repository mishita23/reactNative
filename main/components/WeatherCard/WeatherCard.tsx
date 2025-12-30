import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Switch,
} from 'react-native';
import styles from './WeatherCard.styles';
import { convertTemperature, TemperatureUnit, WeatherCondition, weatherIcons } from '../../utils/temperature';

export interface WeatherData {
  city: string;
  temperature: {
    today_high : number,
    today_low : number
  };
  humidity_percent: number;
  precipitation_mm: number;
  wind_speed_kmph :  number;
  condition: WeatherCondition;
  aqi : number,
  uv_index : number,
  sunrise : string,
  sunset : string,
  visibility_km : number,
  pressure_hpa : number

}

interface Props {
  data: WeatherData;
  onPress: () => void;  
}





const WeatherCard: React.FC<Props> = ({ data, onPress }) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const isFahrenheit = unit === 'F';

  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>

        {/* 🔹 Top Row */}
        <View style={styles.topRow}>
          <Text style={styles.city}>{data.city}</Text>

          <View style={styles.rightSection}>
            <Image
              source={weatherIcons[data.condition]}
              style={styles.weatherIcon}
            />

            <Switch
              value={isFahrenheit}
              onValueChange={value => setUnit(value ? 'F' : 'C')}
              trackColor={{ false: '#ccc', true: '#FFA500' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* 🔹 Temperature */}
        <Text style={styles.temp}>
          {convertTemperature(
            data.temperature?.today_high,
            unit
          )}°{unit}
        </Text>

        {/* 🔹 Other Info */}
        <View style={styles.row}>
          <Image
            source={require('../../assets/icons/humid.png')}
            style={styles.smallIcon}
          />
          <Text style={styles.value}>
            Humidity: {data.humidity_percent}%
          </Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assets/icons/precipitation.png')}
            style={styles.smallIcon}
          />
          <Text style={styles.value}>
            Precipitation: {data.precipitation_mm} mm
          </Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assets/icons/wind.png')}
            style={styles.smallIcon}
          />
          <Text style={styles.value}>
            Wind: {data.wind_speed_kmph} km/h
          </Text>
        </View>

      </View>
    </Pressable>
  );
};


export default WeatherCard;