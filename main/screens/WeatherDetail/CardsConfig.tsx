import React from 'react';
import { Text, View, Image } from 'react-native';

import { WeatherDetailCard } from "./Types";


export const getWeatherDetailCards = (
  weather: any,
): WeatherDetailCard[] =>[  
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
      
]
