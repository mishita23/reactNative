import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import DeviceInfo from 'react-native-device-info';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackNavigator';
import { useAuth } from '../context/AuthContext';

export default function CustomDrawerContent(props: any) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const version = DeviceInfo.getVersion();
  const {user} = useAuth()

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
                 source={
            user?.profileImage
              ? { uri: user?.profileImage }
              : require('../assets/icons/user.png')
          }
            style={styles.profileIcon}
          />
          <Text style={styles.profileText}>My Profile</Text>
        </TouchableOpacity>

        <DrawerItem
          label="FAQ"
          onPress={() => navigation.navigate('FAQ')}
        />

        <DrawerItem
          label="About Us"
          onPress={() => navigation.navigate('AboutUs')}
        />

        <DrawerItem
          label="Logout"
          onPress={() => {
            navigation.replace('Login');
          }}
        />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Text style={styles.versionText}>Version {version}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },

  profileContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

  profileText: {
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },

  versionText: {
    fontSize: 12,
    color: '#9aa0a6',
  },
});
