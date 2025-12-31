import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './SquareCard.styles';
import { SquareCardProps } from './Types';

const SquareCard: React.FC<SquareCardProps> = ({
  image,
  title,
  data,
  footer,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Image source={image} style={styles.image} resizeMode="contain" />

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.dataContainer}>{data}</View>

      {footer && <View>{footer}</View>}
    </Pressable>
  );
};

export default SquareCard;
