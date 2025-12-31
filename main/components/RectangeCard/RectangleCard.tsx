import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './RectangeCard.styles';
import { RectangleCardProps } from './Types';



const MAX_VALUE = 500;

const RectangularCard: React.FC<RectangleCardProps> = ({
  value,
  description,
  showBar = false,
}) => {
  const [barWidth, setBarWidth] = useState(0);

  const clampedValue = Math.min(Math.max(value, 0), MAX_VALUE);

  const markerLeft =
    barWidth > 0
      ? (clampedValue / MAX_VALUE) * barWidth
      : 0;

  const onBarLayout = (event: LayoutChangeEvent) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.valueText}>{value}  |  Good</Text>

      {showBar && (
        <View style={styles.barContainer} onLayout={onBarLayout}>
          <LinearGradient
            colors={['#2ecc71', '#f1c40f', '#e74c3c']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bar}
          />
          <View
            style={[
              styles.marker,
              { left: markerLeft - 6 }, 
            ]}
          >
            <View style={styles.dot} />
          </View>
        </View>
      )}

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default RectangularCard;
