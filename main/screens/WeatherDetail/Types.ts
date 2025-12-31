export interface WeatherDetailCard {
  id: string;
  type: CardType;
  title: string;
  image: any;
  data: React.ReactNode;
  footer?: React.ReactNode;
}
export type CardType =
  | 'FEELS_LIKE'
  | 'UV_INDEX'
  | 'WIND'
  | 'SUNSET'
  | 'PRECIPITATION'
  | 'VISIBILITY'
  | 'HUMIDITY'
  | 'PRESSURE';
