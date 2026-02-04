import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const toastConfig = {
  success: ({ text1, text2 }: any) => (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/checked.png')} 
        style={styles.icon}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),

  error: ({ text1, text2 }: any) => (
    <View style={[styles.container, styles.error]}>
      <Image
        source={require('../../assets/icons/close.png')}
        style={styles.icon}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b', // dark slate
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 12,

    // Android shadow
    elevation: 6,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  error: {
    backgroundColor: '#7f1d1d',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  message: {
    color: '#cbd5f5',
    fontSize: 13,
    marginTop: 2,
  },
});
