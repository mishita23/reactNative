import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TextBox from '../../TextBox/TextBox';
import { FEELS_LIKE_DATA } from '..';

interface Props {
  weather: any;
}

const FeelsLike: React.FC<Props> = ({ weather }) => {
  const data = weather.temperature?.hourly ?? FEELS_LIKE_DATA;
  const max = Math.max(...data);

  const renderHeader = () => (
    <Text style={{ color: '#fff', fontSize: 60, fontWeight: '300' }}>
      {weather.temperature?.today_high}° C
    </Text>
  );

  const renderGraph = () => (
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
  );

  const renderTextSections = () => (
    <>
      <TextBox
        title="Forecast"
        data="this is the dummy data adding till the api data is not available is the dummy adding till the api is not avilable"
      />

      <TextBox
        title="About feels like temperature"
        data="this is the dummy data adding till the api data is not available is the dummy adding till the api is not avilable"
      />
    </>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '100%', height: '100%', paddingTop: 8 }}
    >
      {renderHeader()}
      {renderGraph()}
      {renderTextSections()}
    </ScrollView>
  );
};

export default FeelsLike;
