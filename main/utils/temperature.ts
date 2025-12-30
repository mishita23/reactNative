export type TemperatureUnit = 'C' | 'F';

export const convertTemperature = (
  tempInCelsius: number,
  unit: TemperatureUnit,
): number => {
  if (unit === 'F') {
    return Math.round((tempInCelsius * 9) / 5 + 32);
  }
  return tempInCelsius;
};
export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'hazy' | 'snowy';
export const weatherIcons: Record<WeatherCondition, any> = {
  sunny: require('../assets/icons/sunny.png'),
  cloudy: require('../assets/icons/cloudy.png'),
  rainy: require('../assets/icons/rainy.png'),
  hazy: require('../assets/icons/partiallyCloudy.png'),
  snowy: require('../assets/icons/snowflake.png'),
};


