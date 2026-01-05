import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './TenDayForecast.styles';
import { Days_Name } from '../../assets/DataConstants';
import { foreCastProps } from './Types';



const DAYS = Days_Name

const getDayLabel = (index: number) => {
  if (index === 0) return 'Today';
  const dayIndex = (new Date().getDay() + index) % 7;
  return DAYS[dayIndex];
};

const TenDayForecast: React.FC<foreCastProps> = ({ data }) => {
  const forecast = data.slice(0, 10);

  return (
    <View>
      {forecast.map((item, index) => (
        <View key={index}>
          <View style={styles.row}>
            <Text style={styles.day}>{getDayLabel(index)}</Text>

            <Image source={item.icon} style={styles.icon} />

            <Text style={styles.temp}>{item.min}°</Text>

            <LinearGradient
              colors={['#72d9a2ff', '#1186c1ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.graph}
            />

            <Text style={styles.temp}>{item.max}°</Text>
          </View>

          {index !== forecast.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      ))}
    </View>
  );
};

export default TenDayForecast;
