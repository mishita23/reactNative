import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './HomeTabs';
import DummyScreen from '../screens/DummyScreens/DummyScreen';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

export type DrawerParamList = {
  HomeTabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function HomeDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ title: 'Home' }}
      />
    </Drawer.Navigator>
  );
}
