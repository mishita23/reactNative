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
import { WeatherDetailCard } from './Types';
import { getWeatherDetailCards } from './CardsConfig';
import TenDayForecast from '../../components/TenDayForecast/TenDayForecast';
import CommonCard from '../../components/CommonCard/CommonCard';
import { TEN_DAY_FORECAST } from '../../assets/DataConstants';
import LocationMap from '../../components/LocationMap/LocationMap';

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

  const { weather } = params;
  const DATA = getWeatherDetailCards(weather);
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

  const handleCardPress = (item: any) => {
    setSelectedCard(item);
    setSheetVisible(true);
  };
  const renderHeader = () => (
    <Animated.View
      style={[
        styles.upperContainer,
        { height: headerHeight, padding: headerPadding },
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
        <Animated.Text style={[styles.temperature, { fontSize: tempFontSize }]}>
          {weather.temperature.today_high}°C
        </Animated.Text>

        <Text style={styles.pipe}> | </Text>

        <Text style={styles.condition}>{weather.condition}</Text>
      </View>

      <Animated.View
        style={{ opacity: hideOpacity, height: hideHeight, overflow: 'hidden' }}
      >
        <Text style={styles.minMax}>
          H {weather.temperature.today_high}°C | L{' '}
          {weather.temperature.today_low}°C
        </Text>
      </Animated.View>
    </Animated.View>
  );

  const renderSquareCard = ({ item }: { item: WeatherDetailCard }) => (
    <SquareCard
      image={item.image}
      title={item.title}
      data={item.data}
      footer={item.footer}
      onPress={() => handleCardPress(item)}
    />
  );

  const renderAQICard = () => (
    <RectangularCard
      value={weather.aqi}
      description="Air Quality Index"
      showBar
    />
  );

  const renderTopCards = () => (
    <View>
      <CommonCard
      title='10 DAYS FORECAST'
      icon = {require("../../assets/icons/sunny.png")}
      >
        <TenDayForecast data={TEN_DAY_FORECAST} />
      </CommonCard>
      {/* {renderLocationCard()} */}

      {renderAQICard()}
    </View>
  );

  // const renderLocationCard = () => (
  //   <CommonCard>
  //     <LocationMap latitude={28.6139} longitude={77.209} />
  //   </CommonCard>
  // );
  const renderBottomSheetPicker = () => (
    <View style={styles.pickerWrapper}>
      <View style={styles.picker}>
        <Picker
          style={styles.innerPicker}
          mode="dropdown"
          selectedValue={selectedCard?.id}
          onValueChange={(itemId: any) => {
            const newCard = DATA.find(card => card.id === itemId);
            if (newCard) setSelectedCard(newCard);
          }}
        >
          {DATA.map(item => (
            <Picker.Item key={item.id} label={item.title} value={item.id} />
          ))}
        </Picker>
      </View>
    </View>
  );

  const renderBottomSheet = () => (
    <BottomSheet
      visible={sheetVisible}
      onClose={() => setSheetVisible(false)}
      title={selectedCard?.title}
      icon={selectedCard?.image}
    >
      {renderBottomSheetPicker()}
      {SelectedComponent && <SelectedComponent weather={weather} />}
    </BottomSheet>
  );

  return (
    <LinearGradient
      colors={['#1186c1ff', '#72b9d9ff', '#F5FBFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        {renderHeader()}

        <Animated.FlatList
          data={DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          ListHeaderComponent={renderTopCards()}
          renderItem={renderSquareCard}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
        />

        {renderBottomSheet()}
      </View>
    </LinearGradient>
  );
};
export default WeatherDetailsScreen;
