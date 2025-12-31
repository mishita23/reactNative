import React from 'react';
import { View, Text } from 'react-native';
import styles from './TextBox.styles';
import { TextBoxProps } from './Types';



const TextBox: React.FC<TextBoxProps> = ({ title, data }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.label}>{title}</Text>}
      <View style={styles.dataBox}>
        <Text style={styles.dataText}>{data}</Text>
      </View>
    </View>
  );
};

export default TextBox;
