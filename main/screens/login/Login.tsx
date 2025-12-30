import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './Login.styles';
import GenericTextInput from '../../components/TextInput/TextInput';
import GenericButton from '../../components/Button/Button';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { fetcher } from '../../api/fetcher';
import { useAuth } from '../../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '54090856034-2mch4qta1oakksihfbgt4c66m7r77nkt.apps.googleusercontent.com',
    });
  }, []);
  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      await GoogleSignin.signOut();

      await GoogleSignin.signIn();

      const { idToken } = await GoogleSignin.getTokens();

      if (!idToken) {
        throw new Error('Google ID token not found');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);


      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
         const firebaseUser = userCredential.user;
             const userData = {
      id: Number(firebaseUser.uid),
      username: firebaseUser.displayName || 'Google User',
      email: firebaseUser.email || '',
      firstName: firebaseUser.displayName?.split(' ')[0] || '',
      lastName:
        firebaseUser.displayName?.split(' ').slice(1).join(' ') || '',
      token: await firebaseUser.getIdToken(), 
    };
        login(userData);


      navigation.replace('Weather');
    } catch (error: any) {
      console.log('Google Sign-In Error Full:', error);

      Alert.alert(
        'Google Sign-In Error',
        `Code: ${error?.code}\nMessage: ${error?.message}`,
      );
    }
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);

    const emailError = validateEmail(value);
    setErrors(prev => ({
      ...prev,
      email: emailError || undefined,
    }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    const passwordError = validatePassword(value);
    setErrors(prev => ({
      ...prev,
      password: passwordError || undefined,
    }));
  };

  const handleLogin = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError || undefined,
        password: passwordError || undefined,
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetcher<any>({
        url: 'https://dummyjson.com/auth/login',
        method: 'POST',
        body: {
          username: "emilys",
          password: "emilyspass",
        },
      });

      login(response);

      navigation.replace('Weather');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#cfdce3ff', '#72b9d9ff', '#F5FBFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>LOGIN </Text>
      <GenericTextInput
        placeholder="Enter Email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={errors.email}
      />
      <GenericTextInput
        placeholder="Enter password"
        label="Password"
        value={password}
        secureText={secure}
        onToggleSecure={() => setSecure(prev => !prev)}
        onChange={handlePasswordChange}
        error={errors.password}
      />
      <View style={styles.signIn}>
        <GenericButton
          title="Click to login"
          onPress={handleLogin}
          disabled={!email || !password}
          loading={loading}
          style={styles.authButton}
        />

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.googleButtonWrapper}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleGoogleSignIn}
            style={styles.googleButton}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
