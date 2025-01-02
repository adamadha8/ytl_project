import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LoginScreenProps} from '../../type';
import {styles} from './styles';

const LoginScreenComp: React.FC<LoginScreenProps> = ({
  handleLogin,
  pinInput,
  setPinInput,
  biometricType,
  isConnected,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your PIN (123456)"
        secureTextEntry
        keyboardType="numeric"
        value={pinInput}
        onChangeText={setPinInput}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={styles.pinLoginButton}
        onPress={() => handleLogin('PIN')}>
        <Text style={styles.pinLoginButtonText}>Login with PIN</Text>
      </TouchableOpacity>

      {biometricType && (
        <View>
          <Text style={styles.optionLabel}>Or</Text>
          <TouchableOpacity
            style={styles.biometricsButton}
            onPress={() => handleLogin('Biometric')}>
            <Text style={styles.biometricsButtonText}>
              Login with {biometricType}
            </Text>
          </TouchableOpacity>

          {!isConnected && (
            <Text style={styles.noInternet}>No Internet Connection</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default LoginScreenComp;
