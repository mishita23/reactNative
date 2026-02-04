import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './TextInput.styles';
import { TextInputProps } from './Types';

const GenericTextInput: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  secureText,
  error,
  onChange,
  editable = true,
  onToggleSecure,
  labelStyle,
  inputStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.input, error && styles.error]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          editable={editable}
          secureTextEntry={secureText}
          onChangeText={onChange}
          style={[styles.innerInput, inputStyle]}
        />
        {onToggleSecure && (
          <TouchableOpacity onPress={onToggleSecure}>
            <Image
              source={
                secureText
                  ? require('../../assets/icons/closeEye.png')
                  : require('../../assets/icons/openEye.png')
              }
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
