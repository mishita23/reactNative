interface ForecastItem {
  min: number;
  max: number;
  icon: any;
}

export interface foreCastProps {
  data: ForecastItem[];
}