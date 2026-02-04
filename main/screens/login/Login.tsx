import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './Login.styles';
import GenericTextInput from '../../components/TextInput/TextInput';
import GenericButton from '../../components/Button/Button';

import { CommonData } from './../../../Constants';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { fetcher } from '../../api/fetcher';
import { useAuth } from '../../context/AuthContext';
import { RenderInputParams } from './Types';
import { RootStackParamList } from '../../navigation/RootStackNavigator';

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
      webClientId: CommonData.GOOGLE_CLIENT_ID,
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

      const { uid, displayName, email, getIdToken } = firebaseUser;

      const [firstName = '', ...lastNameParts] = displayName?.split(' ') || [];

      const userData = {
        id: Number(uid),
        username: displayName || 'Google User',
        email: email || '',
        firstName,
        lastName: lastNameParts.join(' '),
        token: await getIdToken(),
      };

      login(userData);

      navigation.navigate('HomeDrawer');
    } catch (error: any) {
      console.log('Google Sign-In Error Full:', error);

      Alert.alert(
        'Google Sign-In Error',
        `Code: ${error?.code}\nMessage: ${error?.message}`,
      );
    }
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
          username: 'emilys',
          password: 'emilyspass',
        },
      });
      login(response);
      navigation.navigate('HomeDrawer');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  // render functions
  const renderTitle = () => <Text style={styles.title}>LOGIN</Text>;

  const renderInput = ({
    label,
    placeholder,
    value,
    onChange,
    error,
    secureText,
    onToggleSecure,
  }: RenderInputParams) => (
    <GenericTextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      secureText={secureText}
      onToggleSecure={onToggleSecure}
    />
  );

  const renderLoginButton = () => (
    <GenericButton
      title="Click to login"
      onPress={handleLogin}
      disabled={!email || !password}
      loading={loading}
      style={styles.authButton}
    />
  );

  const renderDivider = () => (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );

  const renderGoogleSignIn = () => (
    <View style={styles.googleButtonWrapper}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleSignIn}
        style={styles.googleButton}
      />
    </View>
  );

  const renderAuthActions = () => (
    <View style={styles.signIn}>
      {renderLoginButton()}
      {renderDivider()}
      {renderGoogleSignIn()}
    </View>
  );

  return (
    <LinearGradient
      colors={['#cfdce3ff', '#72b9d9ff', '#F5FBFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {renderTitle()}
      {renderInput({
        label: 'Email',
        placeholder: 'Enter Email',
        value: email,
        onChange: handleEmailChange,
        error: errors.email,
      })}

      {renderInput({
        label: 'Password',
        placeholder: 'Enter password',
        value: password,
        onChange: handlePasswordChange,
        error: errors.password,
        secureText: secure,
        onToggleSecure: () => setSecure(prev => !prev),
      })}

      {renderAuthActions()}
    </LinearGradient>
  );
};

export default LoginScreen;
