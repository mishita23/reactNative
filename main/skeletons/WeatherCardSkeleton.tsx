import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from '../components/WeatherCard/WeatherCard.styles';

const WeatherCardSkeleton = () => {
  return (
    <View style={styles.card}>
      <SkeletonPlaceholder
        backgroundColor="rgba(255,255,255,0.25)"
        highlightColor="rgba(255,255,255,0.4)"
      
      >
        {/* Header */}
        <View style={styles.topRow}>
          <View
            style={{
              width: 120,
              height: 18,
              borderRadius: 6,
            }}
          />

          <View style={styles.rightSection}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
            <View
              style={{
                width: 40,
                height: 20,
                borderRadius: 10,
              }}
            />
          </View>
        </View>


        <View
          style={{
            width: 70,        
            height: 55,
            borderRadius: 8,
            marginVertical: 8,
          }}
        />


        <View >
   {[1, 2, 3].map(index => (
          <View key={index} style={styles.row}>
            <View
              style={{
                width: 16,
                height: 16,     
                borderRadius: 8,
              
              }}
            />
            <View
              style={{
                width: '60%',
                height: 14,    
                borderRadius: 6,
              }}
            />
          </View>
        ))}
        </View>
     
      </SkeletonPlaceholder>
    </View>
  );
};

export default WeatherCardSkeleton;
