import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {

    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(4, 95, 123, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(13, 153, 196, 0.5)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    fontSize: 18,
    fontWeight: '600',
    color : "#fff"
  },
  temp: {
    fontSize: 32,
    fontWeight: '700',
    marginVertical: 8,
    color:  "#fff",
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
  },
  value: {
    fontSize: 14,
    color: '#dadcddff',
  },
topRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

rightSection: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
},

weatherIcon: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
},

  smallIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});
