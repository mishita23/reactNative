import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './Buton.styles';
import { ButtonProps } from './Types';

const GenericButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  loading,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default GenericButton;
