import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import WeatherScreen from './main/screens/weather/weather';
import AppNavigator from './main/AppNavigator';
import { AuthProvider } from './main/context/AuthContext';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
