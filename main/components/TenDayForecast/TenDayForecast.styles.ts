import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  day: {
    width: 60,
    color: '#fff',
    fontSize: 16,
    fontWeight : 500
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  temp: {
    width: 32,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  graph: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 8,
  },
  divider: {
  height: 0.5,
  backgroundColor: 'rgba(203, 216, 235, 1)',
  marginVertical: 8,
},
});
