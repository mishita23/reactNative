import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/RootStackNavigator';
import HomeScreen from '../screens/Home/Home';

const Tab = createBottomTabNavigator();
const Dummy = () => null;

type Nav = NativeStackNavigationProp<RootStackParamList>;

const getTabIcon = (tab: 'Home' | 'Weather' | 'Calendar' | 'Todo', focused: boolean) => {
  switch (tab) {
    case 'Home':
      return focused
        ? require('../assets/icons/home-outlined.png')
        : require('../assets/icons/home.png');

    case 'Weather':
      return focused
        ? require('../assets/icons/cloud-outlined.png')
        : require('../assets/icons/clouds.png');

    case 'Calendar':
      return focused
        ? require('../assets/icons/calendar-outlined.png')
        : require('../assets/icons/calendar.png');

    case 'Todo':
      return focused
        ? require('../assets/icons/toDo-outlined.png')
        : require('../assets/icons/toDo.png');
  }
};

export default function HomeTabs() {
  const navigation = useNavigation<Nav>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#095a82',
        tabBarInactiveTintColor: '#9aa0a6',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={getTabIcon('Home', focused)}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WeatherTab"
        component={Dummy}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Weather');
          },
        }}
        options={{
          title: 'Weather',
          tabBarIcon: ({ focused }) => (
            <Image
              source={getTabIcon('Weather', focused)}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Health"
        component={Dummy}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Health');
          },
        }}
        options={{
          title: 'Health',
          tabBarIcon: ({ focused }) => (
            <Image
              source={getTabIcon('Calendar', focused)}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TodoTab"
        component={Dummy}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Todo');
          },
        }}
        options={{
          title: 'Todo',
          tabBarIcon: ({ focused }) => (
            <Image
              source={getTabIcon('Todo', focused)}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
