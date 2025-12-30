import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width : "100%"
  },
  overlay: {
   flex : 1,
    backgroundColor: 'rgba(36, 36, 36, 0.6)',
  },
  sheet: {
    height: SCREEN_HEIGHT * 0.95,
    backgroundColor: '#2b2a2aff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },

  centerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  closeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -9 }],
  },

  headerIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  smallIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
  },

  content: {
    flex: 1,
    padding: 16,
  },
});
