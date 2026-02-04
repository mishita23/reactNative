import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './ProfileScreen.styles';
import GenericTextInput from '../../components/TextInput/TextInput';
import { useAuth } from '../../context/AuthContext';
import Toast from 'react-native-toast-message';

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  image?: string;
};

const ProfileScreen = () => {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    image: '',
  });

  useEffect(() => {
    if (!user) return;

    setProfile(prev => ({
      ...prev,
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      email: user.email ?? '',
      image: user.profileImage ?? '',
    }));
  }, [user]);

  const handleChange = (key: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      });
      setProfile(prev => ({ ...prev, image: image.path }));
    } catch {
      console.log('Camera cancelled');
    }
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      setProfile(prev => ({ ...prev, image: image.path }));
    } catch {
      console.log('Gallery cancelled');
    }
  };

  const onSelectImage = () => {
    Alert.alert('Profile Picture', 'Choose an option', [
      { text: 'Camera', onPress: openCamera },
      { text: 'Gallery', onPress: openGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };
  const handleSave = () => {
    updateProfile({
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      profileImage: profile?.image,
      email: profile?.email,
    });

    Toast.show({
      type: 'success',
      text1: 'Saved Successfully',
      text2: 'Your profile details are updated',
      position: 'top',
      visibilityTime: 2000,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectImage} style={styles.imageWrapper}>
        <Image
          source={
            profile.image
              ? { uri: profile.image }
              : require('../../assets/icons/user.png')
          }
          style={styles.profileImage}
        />
        <Text style={styles.changeText}>Change Photo</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <GenericTextInput
            label="First Name"
            placeholder="Enter first name"
            value={profile.firstName}
            onChange={text => handleChange('firstName', text)}
          />

          <GenericTextInput
            label="Last Name"
            placeholder="Enter last name"
            value={profile.lastName}
            onChange={text => handleChange('lastName', text)}
          />

          <GenericTextInput
            label="Email"
            placeholder="Enter email"
            value={profile.email}
            onChange={text => handleChange('email', text)}
          />

          <GenericTextInput
            label="Contact Number"
            placeholder="Enter phone number"
            value={profile.phone}
            onChange={text => handleChange('phone', text)}
          />

          <GenericTextInput
            label="Address"
            placeholder="Enter address"
            value={profile.address}
            onChange={text => handleChange('address', text)}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Save Profile</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileScreen;
