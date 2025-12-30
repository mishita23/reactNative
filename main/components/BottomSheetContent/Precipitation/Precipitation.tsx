import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import TextBox from '../../TextBox/TextBox';

interface Props {
  weather: any;
}

const screenWidth = Dimensions.get('window').width;

const Precipitation: React.FC<Props> = ({ weather }) => {
  const precipitationLevels = { Low: 1, Moderate: 2, Heavy: 3 };
  
  const precipData = [1, 2, 3, 2];
  const times = ['6AM', '12PM', '6PM', '12AM'];

  const chartData = {
    labels: times,
    datasets: [
      {
        data: precipData,
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, 
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '100%', height: '100%', paddingTop: 8 }}
    >

      <Text style={{ color: '#fff', fontSize: 60, fontWeight: '300' }}>
        {weather.precipitation_mm} mm
      </Text>

      <LineChart
        data={chartData}
        width={screenWidth - 40}
        height={180}
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: '#1a1a1a',
          backgroundGradientTo: '#1a1a1a',
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200,200,200,${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#2196f3',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 12,
        }}
        fromZero
      />
      <TextBox
        title="Forecast"
        data="This is dummy precipitation forecast data until API is available."
      />

      <TextBox
        title="About Precipitation"
        data="Precipitation intensity shown as Low, Moderate, or Heavy throughout the day."
      />
    </ScrollView>
  );
};

export default Precipitation;
