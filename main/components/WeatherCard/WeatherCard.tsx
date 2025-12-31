import React, { useState } from 'react';
import { View, Text, Image, Pressable, Switch } from 'react-native';
import styles from './WeatherCard.styles';
import {
  convertTemperature,
  TemperatureUnit,
  WeatherCondition,
  weatherIcons,
} from '../../utils/temperature';
import { WeatherCardProps } from './Types';



const WeatherCard: React.FC<WeatherCardProps> = ({ data, onPress }) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const isFahrenheit = unit === 'F';

  const renderHeader = () => (
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
  );

  const renderTemperature = () => (
    <Text style={styles.temp}>
      {convertTemperature(data.temperature?.today_high, unit)}°{unit}
    </Text>
  );

  const renderInfoRow = (
    icon: any,
    label: string,
    value: string | number,
    unit?: string,
  ) => (
    <View style={styles.row}>
      <Image source={icon} style={styles.smallIcon} />
      <Text style={styles.value}>
        {label}: {value}
        {unit}
      </Text>
    </View>
  );


  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        {renderHeader()}
        {renderTemperature()}

        {renderInfoRow(
          require('../../assets/icons/humid.png'),
          'Humidity',
          data.humidity_percent,
          '%',
        )}

        {renderInfoRow(
          require('../../assets/icons/precipitation.png'),
          'Precipitation',
          data.precipitation_mm,
          ' mm',
        )}

        {renderInfoRow(
          require('../../assets/icons/wind.png'),
          'Wind',
          data.wind_speed_kmph,
          ' km/h',
        )}
      </View>
    </Pressable>
  );
};

export default WeatherCard;
