import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
    style?: StyleProp<ViewStyle>;
}