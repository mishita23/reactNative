import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from './main/context/AuthContext';
import RootStackNavigator from './main/navigation/RootStackNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './main/components/CustomToast/CustomToast';
import { notificationNavigationHandler } from './main/services/NotificationNavigation';
import { foregroundListener, getFcmToken, requestNotificationPermission } from './main/services/NotificationService';

const App = () => {
  useEffect(() => {
  requestNotificationPermission().then(enabled => {
    if (enabled) {
      getFcmToken();
    }
  });

  const unsubscribeForeground = foregroundListener();
  notificationNavigationHandler();

  return unsubscribeForeground;
}, []);
  return (
    <>
      <AuthProvider>
        <RootStackNavigator />
      </AuthProvider>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
