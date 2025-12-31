import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    height: 260,
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'flex-start',
  },

  city: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '400',
  },
  temperatureView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    height: 48,
    width: 48,
    marginRight: 15,
  },
  temperature: {
    fontSize: 60,
    color: '#fff',
  },
  tempType: {
    fontSize: 24,
    color: '#a7c8fcff',
    fontWeight: 500,
  },
  minMax: {
    fontSize: 24,
    color: '#effffcff',
    fontWeight: 500,
  },
  listContent: {
    padding: 8,
    paddingBottom: 24,
  },
  pipe: {
    fontSize: 22,
    color: '#fff',
    marginHorizontal: 4,
  },

  condition: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
  },
  pickerWrapper: {
    alignItems: 'flex-end',
    marginBottom: 12,
    height: 15,
    color: '#fff',
  },

  picker: {
    width: 160,
    backgroundColor: '#333131ff',
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    color: '#fff',
  },
  innerPicker: {
    color: '#fff',
  },
});
