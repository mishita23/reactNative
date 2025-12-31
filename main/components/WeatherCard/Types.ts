import { WeatherCondition } from "../../utils/temperature";

export interface WeatherData {
  city: string;
  temperature: {
    today_high: number;
    today_low: number;
  };
  humidity_percent: number;
  precipitation_mm: number;
  wind_speed_kmph: number;
  condition: WeatherCondition;
  aqi: number;
  uv_index: number;
  sunrise: string;
  sunset: string;
  visibility_km: number;
  pressure_hpa: number;
}

export interface WeatherCardProps {
  data: WeatherData;
  onPress: () => void;
}