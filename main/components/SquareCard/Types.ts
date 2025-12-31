export interface SquareCardProps {
  image: any; 
  title: string;
  data: React.ReactNode;
  footer?: React.ReactNode;
  onPress?: () => void;
}