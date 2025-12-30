import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './TextInput.styles';
interface Props {
  label?: string;
  value: string;
  placeholder: string;
  secureText?: boolean;
  error?: string;
  onChange: (text: string) => void;
  onToggleSecure?: () => void;
}

const GenericTextInput: React.FC<Props> = ({
  label,
  value,
  placeholder,
  secureText,
  error,
  onChange,
  onToggleSecure,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.input, error && styles.error]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureText}
          onChangeText={onChange}
          style={styles.innerInput}
        />
        {onToggleSecure && (
          <TouchableOpacity onPress={onToggleSecure}>
            <Image
              source={secureText ? require("../../assets/icons/closeEye.png") : require("../../assets/icons/openEye.png")}
             style={styles.eyeIcon}
            
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default GenericTextInput;
