import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface TextInputProps {
  label?: string;
  value: string;
  placeholder: string;
  secureText?: boolean;
  error?: string;
  editable?: boolean;
  onChange: (text: string) => void;
  onToggleSecure?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
