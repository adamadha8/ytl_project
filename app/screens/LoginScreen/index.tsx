import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import alertMsg from "../../constants/errorList.json";
import useBiometric from '../../hooks/useBiometric';
import useConnection from '../../hooks/useConnection';
import { RootState } from '../../redux/auth/store';
import { RootStackParamList } from '../../type';
import LoginScreenComp from '../LoginScreen/component';


const LoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({ navigation }) => {
  const { biometricEnabled, pin } = useSelector((state: RootState) => state.auth);
  const [pinInput, setPinInput] = useState('');
  const { biometricType, initializeBiometric, authenticate } = useBiometric();
  const isConnected = useConnection(); 
  const { E0002, E0008 } = alertMsg.error

  useEffect(() => {
    initializeBiometric();
  }, [initializeBiometric]);

  const onSuccess = () => {
    navigation.navigate('Home');
  };

  const handleBiometricLogin = async () => {
    const { success } = await authenticate('Authenticate to login');
    if (success) {
      onSuccess();
    } else return
  };

  const handlePinLogin = () => {
    if (pinInput === pin) {
      onSuccess();
    } else {
      Alert.alert(E0008.title,E0008.message);
    }
  };

  const handleLogin = async (type: 'PIN' | 'Biometric') => {
    if (!isConnected) {
      Alert.alert(E0002.title,E0002.message);
      return;
    }
  
    if (type === 'PIN') {
      handlePinLogin();
    } else if (type === 'Biometric') {
      handleBiometricLogin();
    }
  };

  const props = {
    handleLogin,
    pinInput,
    setPinInput,
    biometricType,
    isConnected,
  };

  return <LoginScreenComp {...props} />;
};

export default LoginScreen;
