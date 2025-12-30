import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import TextBox from '../../TextBox/TextBox';

interface Props {
  weather: any;
}

const screenWidth = Dimensions.get('window').width;

const UVIndex: React.FC<Props> = ({ weather }) => {
  const uvData = [1, 7, 8, 9, 4, 2, 1];
  const times = [
    '6AM','9AM','10AM','1PM','2PM','4PM','5PM'
  ];

  const chartData = {
    labels: times,
    datasets: [
      {
        data: uvData,
        color: (opacity = 1) => `rgba(255, 87, 34, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView
       showsVerticalScrollIndicator={false}
       style={{ width: '100%', height : "100%", paddingTop: 8 }} >

      <Text style={{ color: '#fff', fontSize: 60, fontWeight: '300' }}>
        {weather.uv_index}
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
          color: (opacity = 1) => `rgba(255, 87, 34, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200,200,200,${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ff5722',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 12,
        }}
      />

 <TextBox title='Forecast' data= "this is the dummy data adding till the api data is not available is the dummy adding till the api  is not avilable" />

<TextBox title='About the UV' data= "this is the dummy data adding till the api data is not available is the dummy adding till the api  is not avilable" />
    </ScrollView>
  );
};

export default UVIndex;
