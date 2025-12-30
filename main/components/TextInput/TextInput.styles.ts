import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 48,
    borderColor: '#ccc',
  },
  innerInput: {
    flex: 1,
    fontSize: 16,
  },
  toggle: {
    color: '#007AFF',
    fontWeight: '500',
  },
  errorText: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
  },
  error: {
    borderColor: 'red',
  },
  eyeIcon : {
    height: 20,
    width: 20
  }
});
