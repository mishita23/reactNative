import messaging from '@react-native-firebase/messaging';
import { navigate } from '../navigation/NacigationRef';

export function notificationNavigationHandler() {
  messaging().onNotificationOpenedApp(remoteMessage => {
    const screen = remoteMessage.data?.screen;
    if (screen) {
      navigate(screen);
    }
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage?.data?.screen) {
        navigate(remoteMessage.data.screen);
      }
    });
}
