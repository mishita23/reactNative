import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 7;

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
  },

  dayContainer: {
    width: ITEM_WIDTH,
    alignItems: 'center',
  },

  dayText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 6,
  },

  dateCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedDateCircle: {
    backgroundColor: '#FF8C00',
    borderRadius: 17,
  },

  dateText: {
    color: '#fff',
    fontSize: 16,
  },

  selectedDateText: {
    color: '#000',
    fontWeight: '600',
  },

  fullDateText: {
    color: '#888686ff',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default styles;
