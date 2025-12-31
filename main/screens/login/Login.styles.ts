import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
  },

  signIn: {
    width: '100%',
    alignItems: 'center',
  },

  authButton: {
    width: '100%',
    height: 48,
  },

  googleButtonWrapper: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
  },

  googleButton: {
    width: '100%',
    height: 48,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    width: '100%',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D3D3D3',
  },

  orText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});
