import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './MiniCalander.styles';
import { Days } from '../../assets/DataConstants';

const DAYS = Days

const generateDates = () => {
  const today = new Date();
  return Array.from({ length: 10 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return {
      day: DAYS[d.getDay()],
      date: d.getDate(),
      fullDate: d, 
    };
  });
};

const formatFullDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  return date.toLocaleDateString(undefined, options);
};

const MiniCalendar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dates = generateDates();
  const selectedDate = dates[selectedIndex].fullDate;

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {dates.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <Pressable
              key={index}
              onPress={() => setSelectedIndex(index)}
              style={styles.dayContainer}
            >
              <Text style={styles.dayText}>{item.day}</Text>

              <View
                style={[
                  styles.dateCircle,
                  isSelected && styles.selectedDateCircle,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isSelected && styles.selectedDateText,
                  ]}
                >
                  {item.date}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text style={styles.fullDateText}>
        {formatFullDate(selectedDate)}
      </Text>
    </View>
  );
};

export default MiniCalendar;
