import messaging from '@react-native-firebase/messaging';
import { Alert, Platform } from 'react-native';

export async function requestNotificationPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  return enabled;
}

export async function getFcmToken() {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
  return token;
}

export function foregroundListener() {
  return messaging().onMessage(async remoteMessage => {
    Alert.alert(
      remoteMessage.notification?.title ?? 'Notification',
      remoteMessage.notification?.body ?? ''
    );
  });
}
