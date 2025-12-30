import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(43, 150, 182, 0.5)',
    borderWidth: 1,
    borderColor:'rgba(13, 153, 196, 0.5)',
  },

  valueText: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 12,
    color: '#fff',
  },

  barContainer: {
    marginVertical: 10,
    position: 'relative',
  },

  bar: {
    height: 10,
    borderRadius: 6,
  },

  marker: {
    position: 'absolute',
    transform: [{ translateX: -6 }],
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#04075aff',
  },

  description: {
    marginTop: 4,
    fontSize: 16,
    textAlign: 'left',
    color: '#fff',
    fontWeight : 500
  },
});

export default styles;
