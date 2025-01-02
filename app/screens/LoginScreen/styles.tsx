import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: '#301934',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#F0F0F0',
    marginBottom: 30,
  },
  biometricsButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
    elevation: 5, 
    alignItems: 'center',
  },
  biometricsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 30,
    elevation: 2,
  },
  pinLoginButton: {
    backgroundColor: '#03dac5',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  pinLoginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  optionLabel:{color:'#fff', padding:10, textAlign:'center', fontWeight:'bold'},
  noInternet:{ color: 'red', textAlign:'center' }
});