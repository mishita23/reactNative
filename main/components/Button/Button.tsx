import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import styles from "./Buton.styles"

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
    style?: StyleProp<ViewStyle>;
}
const GenericButton: React.FC<Props> = ({
  title,
  onPress,
  disabled,
  loading,
  style
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style,disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? <ActivityIndicator color="white" /> : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};
export default GenericButton;