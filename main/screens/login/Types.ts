export type RenderInputParams = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  secureText?: boolean;
  onToggleSecure?: () => void;
};