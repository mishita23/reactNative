import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TextBox from '../../TextBox/TextBox';

interface Props {
  weather: any;
}

const FeelsLike: React.FC<Props> = ({ weather }) => {

  const data =
    weather.temperature?.hourly ?? [18, 19, 20, 21, 22, 21, 20];

  const max = Math.max(...data);

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{ width: '100%', height : "100%", paddingTop: 8 }} >

      <Text style={{ color: '#fff', fontSize: 60, fontWeight: '300' }}>
        {weather.temperature?.today_high}° C
      </Text>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: 120,
          marginTop: 24,
        }}
      >
        {data.map((value: number, index: number) => (
          <View
            key={index}
            style={{
              flex: 1,
              marginHorizontal: 4,
              height: (value / max) * 120,
              backgroundColor: '#ff9800',
              borderRadius: 6,
            }}
          />
        ))}
      </View>

  
    <TextBox title='Forecast' data= "this is the dummy data adding till the api data is not available is the dummy adding till the api  is not avilable" />

<TextBox title='About feels like temperature' data= "this is the dummy data adding till the api data is not available is the dummy adding till the api  is not avilable" />
    </ScrollView>
  );
};

export default FeelsLike;
