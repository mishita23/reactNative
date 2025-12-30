import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { View, Text, Image, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import styles from './WeatherDetail.styles';
import RectangularCard from '../../components/RectangeCard/RectangleCard';
import SquareCard from '../../components/SquareCard/SquareCard';
import { weatherIcons } from '../../utils/temperature';
import { bottomSheetComponentMap } from '../../components/BottomSheetContent';
import BottomSheet from '../../components/CardDetailsModal/CardDetailsModal';

interface WeatherDetailCard {
  id: string;
  type: CardType;
  title: string;
  image: any;
  data: React.ReactNode;
  footer?: React.ReactNode;
}
export type CardType =
  | 'FEELS_LIKE'
  | 'UV_INDEX'
  | 'WIND'
  | 'SUNSET'
  | 'PRECIPITATION'
  | 'VISIBILITY'
  | 'HUMIDITY'
  | 'PRESSURE';

type RouteProps = RouteProp<RootStackParamList, 'WeatherDetails'>;
const HEADER_MAX_HEIGHT = 260;
const HEADER_MIN_HEIGHT = 90;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const WeatherDetailsScreen = () => {
  const [selectedCard, setSelectedCard] = useState<WeatherDetailCard | null>(
    null,
  );
  const [sheetVisible, setSheetVisible] = useState(false);
  const { params } = useRoute<RouteProps>();
  const scrollY = useRef(new Animated.Value(0)).current;

  const SelectedComponent = selectedCard?.type
    ? bottomSheetComponentMap[selectedCard.type]
    : null;
  const headerHeight = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const headerPadding = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [24, 12],
    extrapolate: 'clamp',
  });

  const hideOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const hideHeight = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE / 2],
    outputRange: [60, 0],
    extrapolate: 'clamp',
  });
  const cityFontSize = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [34, 22],
    extrapolate: 'clamp',
  });

  const tempFontSize = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [48, 24],
    extrapolate: 'clamp',
  });

  const { weather } = params;
  const DATA: WeatherDetailCard[] = [
    {
      id: '1',
      title: 'FEELS LIKE',
      type: 'FEELS_LIKE',
      image: require('../../assets/icons/humidity-sensor.png'),
      data: (
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 40 }}>
          {weather.temperature?.today_high}° C
        </Text>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Similar to the actual temperature{' '}
        </Text>
      ),
    },
    {
      id: '2',
      title: 'UV INDEX',
      type: 'UV_INDEX',
      image: require('../../assets/icons/uv.png'),
      data: (
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 40 }}>
          {weather?.uv_index}
        </Text>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Low for the rest of the day
        </Text>
      ),
    },
    {
      id: '3',
      type: 'WIND',
      title: 'WIND',
      image: require('../../assets/icons/windy.png'),
      data: (
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 35 }}>
          {weather?.wind_speed_kmph}kmph
        </Text>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Moderate winds throughout the day
        </Text>
      ),
    },
    {
      id: '4',
      title: 'SUNSET',
      type: 'SUNSET',
      image: require('../../assets/icons/sunrise.png'),
      data: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 500, fontSize: 20 }}>
            {weather.sunset} PM
          </Text>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/icons/sunriseMain.png')}
          />
        </View>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Sunrise - {weather.sunrise} AM
        </Text>
      ),
    },
    {
      id: '5',
      title: 'PRECIPITATION',
      type: 'PRECIPITATION',
      image: require('../../assets/icons/precipitation.png'),
      data: (
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 35 }}>
          {weather.precipitation_mm}mm
        </Text>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Can be expected in upcoming days
        </Text>
      ),
    },
    {
      id: '6',
      title: 'VISIBLITY',
      type: 'VISIBILITY',
      image: require('../../assets/icons/visiblity.png'),
      data: (
        <Text style={{ color: '#fff', fontWeight: 400, fontSize: 35 }}>
          {weather.visibility_km} Km
        </Text>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Perfectly clear view.
        </Text>
      ),
    },
    {
      id: '7',
      title: 'HUMIDITY',
      type: 'HUMIDITY',
      image: require('../../assets/icons/humidity-sensor.png'),
      data: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 500, fontSize: 20 }}>
            {weather.humidity_percent}%
          </Text>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/icons/humidity.png')}
          />
        </View>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Moderate
        </Text>
      ),
    },
    {
      id: '8',
      title: 'PRESSURE',
      type: 'PRESSURE',
      image: require('../../assets/icons/pressure.png'),
      data: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 500, fontSize: 20 }}>
            {weather.pressure_hpa} hPa
          </Text>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/icons/pressureMain.png')}
          />
        </View>
      ),
      footer: (
        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>
          Moderately high
        </Text>
      ),
    },
  ];
  const handleCardPress = (item: any) => {
    setSelectedCard(item);
    setSheetVisible(true);
  };
  return (
    <LinearGradient
      colors={['#1186c1ff', '#72b9d9ff', '#F5FBFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.upperContainer,
            {
              height: headerHeight,
              padding: headerPadding,
            },
          ]}
        >
          <Animated.Text style={[styles.city, { fontSize: cityFontSize }]}>
            {weather.city}
          </Animated.Text>

          <Animated.View
            style={{
              opacity: hideOpacity,
              height: hideHeight,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={weatherIcons[weather.condition]}
              style={styles.weatherIcon}
            />
          </Animated.View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Animated.Text
              style={[styles.temperature, { fontSize: tempFontSize }]}
            >
              {weather.temperature.today_high}°C
            </Animated.Text>

            <Text style={styles.pipe}> | </Text>

            <Text style={styles.condition}>{weather.condition}</Text>
          </View>
          <Animated.View
            style={{
              opacity: hideOpacity,
              height: hideHeight,
              overflow: 'hidden',
            }}
          >
            <Text style={styles.minMax}>
              H {weather.temperature.today_high}°C | L{' '}
              {weather.temperature.today_low}°C
            </Text>
          </Animated.View>
        </Animated.View>

        <Animated.FlatList
          data={DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          ListHeaderComponent={
            <RectangularCard
              value={weather.aqi}
              description="Air Quality Index"
              showBar
            />
          }
          renderItem={({ item }) => (
            <SquareCard
              image={item.image}
              title={item.title}
              data={item.data}
              footer={item.footer}
              onPress={() => handleCardPress(item)}
            />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
        />
<BottomSheet
  visible={sheetVisible}
  onClose={() => setSheetVisible(false)}
  title={selectedCard?.title}
  icon={selectedCard?.image}
>
<View
  style={{
    alignItems: 'flex-end',
    marginBottom: 12,
    height : 15
  }}
>
  <View
    style={{
      width: 160,

      backgroundColor: '#333131ff',
      borderRadius: 8,
      justifyContent: 'center',
      borderWidth: 1,

    }}
  >
    <Picker
      mode="dropdown"
      selectedValue={selectedCard?.id}
      dropdownIconColor="#fff"
      style={{
          width: 160,
        color: '#fff',
      }}
      onValueChange={(itemId: any) => {
        const newCard = DATA.find(card => card.id === itemId);
        if (newCard) {
          setSelectedCard(newCard);
        }
      }}
    >
      {DATA.map(item => (
        <Picker.Item
          key={item.id}
          label={item.title}
          value={item.id}
      color='#231e1eff'
        />
      ))}
    </Picker>
  </View>
</View>

  <View>
    {SelectedComponent && (
  <SelectedComponent weather={weather} />
)}
  </View>
</BottomSheet>


      </View>
    </LinearGradient>
  );
};

export default WeatherDetailsScreen;
