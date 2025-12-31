export interface TextInputProps {
  label?: string;
  value: string;
  placeholder: string;
  secureText?: boolean;
  error?: string;
  onChange: (text: string) => void;
  onToggleSecure?: () => void;
}