import React, { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './CommonCard.styles';

interface CommonCardProps {
  title: string;
  icon: any;
  children: ReactNode;
}

const CommonCard: React.FC<CommonCardProps> = ({ title, icon, children }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Image source={icon} style={styles.image} resizeMode="contain" />

        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default CommonCard;
