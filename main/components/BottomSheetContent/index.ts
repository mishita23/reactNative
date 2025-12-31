import { CardType } from '../../screens/WeatherDetail/Types';
import FeelsLike from './FeelsLike/FeelsLike';
import Humidity from './Humidity/Humidity';
import Precipitation from './Precipitation/Precipitation';
import UVIndex from './UVIndex/UVIndex';
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
export const FEELS_LIKE_DATA = [18, 19, 20, 21, 22, 21, 20];
export const HumidityPage = {
HUMIDITY_DATA : [45, 55, 70, 90, 65, 60, 50],
HUMIDITY_TIMES : ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM']
}
export const PrecipitationPage = {
  PRECIP_DATA : [1, 2, 3, 2],
  PRECIP_TIMES : ['6AM', '12PM', '6PM', '12AM']
}
export const UVPage = {
  UV_DATA :[1, 7, 8, 9, 4, 2, 1] ,
  UV_PAGE : ['6AM', '9AM', '10AM', '1PM', '2PM', '4PM', '5PM']
}