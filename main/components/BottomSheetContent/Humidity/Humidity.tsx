import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import Svg, { Polyline, Circle, Line } from 'react-native-svg';
import TextBox from '../../TextBox/TextBox';

interface Props {
  weather: any;
}

const screenWidth = Dimensions.get('window').width;
const GRAPH_WIDTH = screenWidth - 90;
const GRAPH_HEIGHT = 160;

const Humidity: React.FC<Props> = ({ weather }) => {
  const humidityData = [45, 55, 70, 90, 65, 60, 50];
  const times = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'];

  const maxValue = 100;
  const stepX = GRAPH_WIDTH / (humidityData.length - 1);

  const points = humidityData
    .map((value, index) => {
      const x = index * stepX;
      const y = GRAPH_HEIGHT - (value / maxValue) * GRAPH_HEIGHT;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '100%', paddingTop: 8 }}
    >
      <Text style={{ color: '#fff', fontSize: 60, fontWeight: '300' }}>
        {weather.humidity_percent}%
      </Text>

      <View style={{ marginTop: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
            <Line
              x1={GRAPH_WIDTH}
              y1="0"
              x2={GRAPH_WIDTH}
              y2={GRAPH_HEIGHT}
              stroke="#444"
            />

            <Line
              x1="0"
              y1={GRAPH_HEIGHT}
              x2={GRAPH_WIDTH}
              y2={GRAPH_HEIGHT}
              stroke="#444"
            />

            <Polyline
              points={points}
              fill="none"
              stroke="#4fc3f7"
              strokeWidth="2"
            />

            {humidityData.map((value, index) => {
              const x = index * stepX;
              const y = GRAPH_HEIGHT - (value / maxValue) * GRAPH_HEIGHT;

              return <Circle key={index} cx={x} cy={y} r="4" fill="#4fc3f7" />;
            })}
          </Svg>

          <View
            style={{
              justifyContent: 'space-between',
              height: GRAPH_HEIGHT,
              marginLeft: 8,
            }}
          >
            <Text style={{ color: '#aaa', fontSize: 10 }}>High</Text>
            <Text style={{ color: '#aaa', fontSize: 10 }}>Moderate</Text>
            <Text style={{ color: '#aaa', fontSize: 10 }}>Low</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: GRAPH_WIDTH,
            marginTop: 6,
          }}
        >
          {times.map(time => (
            <Text key={time} style={{ color: '#aaa', fontSize: 10 }}>
              {time}
            </Text>
          ))}
        </View>
      </View>

      <TextBox
        title="Forecast"
        data="Humidity levels are expected to remain moderate throughout the day."
      />

      <TextBox
        title="About Humidity"
        data="Humidity is the amount of water vapor in the air. High humidity can make weather feel warmer."
      />
    </ScrollView>
  );
};

export default Humidity;
