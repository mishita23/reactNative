import { CardType } from "../../screens/WeatherDetail/WeatherDetail";
import FeelsLike from "./FeelsLike/FeelsLike";
import Humidity from "./Humidity/Humidity";
import Precipitation from "./Precipitation/Precipitation";
import UVIndex from "./UVIndex/UVIndex";
export const bottomSheetComponentMap: Record<
  CardType,
 React.FC<{ weather: any }>
> = {
  FEELS_LIKE: FeelsLike,
  UV_INDEX: UVIndex,
  WIND: Precipitation,
  SUNSET: FeelsLike,
  PRECIPITATION: Precipitation,
  VISIBILITY: FeelsLike,
  HUMIDITY: Humidity,
  PRESSURE: FeelsLike,
};