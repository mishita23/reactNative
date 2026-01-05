import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  card: {
 
    backgroundColor: 'rgba(43, 150, 182, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(13, 153, 196, 0.5)',
    borderRadius: 16,
    padding: 14,
    margin: 8,
  },

  image: {
    width: 25,
    height: 25,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4c4e86ff',
  },

  dataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: '#fff',
  },
});

export default styles;