import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type LoginScreenProps = {
  handleBiometricLogin: () => void;
  handlePinLogin: () => void;
  handleKeyboardClose: () => void;
  pinInput: string;
  setPinInput: (input: string) => void;
  biometryType: 'FaceID' | 'TouchID' | null;
};

const LoginScreenComp: React.FC<LoginScreenProps> = ({
  handleBiometricLogin,
  handlePinLogin,
  handleKeyboardClose,
  pinInput,
  setPinInput,
  biometryType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>

      {biometryType && (
        <TouchableOpacity style={styles.biometricsButton} onPress={handleBiometricLogin}>
          <Text style={styles.biometricsButtonText}>Login with {biometryType}</Text>
        </TouchableOpacity>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter your PIN (123456)"
        secureTextEntry
        keyboardType="numeric"
        value={pinInput}
        onChangeText={setPinInput}
        onFocus={handleKeyboardClose}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.pinLoginButton} onPress={handlePinLogin}>
        <Text style={styles.pinLoginButtonText}>Login with PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreenComp;
