import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useDispatch, useSelector } from 'react-redux';
import alert from '../../constants/errorList.json';
import { RootState } from '../../redux/auth/store';
import { RootStackParamList } from '../../type';
import LoginScreenComp from '../LoginScreen/component';


const rnBiometrics = new ReactNativeBiometrics();

type BiometryType = 'FaceID' | 'TouchID' | null;

const LoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { biometricEnabled, pin } = useSelector((state: RootState) => state.auth);

  const [pinInput, setPinInput] = useState('');
  const [biometryType, setBiometryType] = useState<BiometryType>(null);

  useEffect(() => {
    rnBiometrics.isSensorAvailable().then(({ available, biometryType }) => {
      if (available) {
        setBiometryType(biometryType === 'FaceID' ? 'FaceID' : 'TouchID');
      } else {
        setBiometryType(null);
      }
    });
  }, []);


  const displayAlert = (code: keyof typeof alert.error) => {
    const alertMessage = alert.error[code];
    Alert.alert(alertMessage.message);
  };



  const handlePinFallback = () => {
    Alert.alert('Fallback', 'Enter your 6-digit PIN');
  };

  const handleBiometricLogin = async () => {
    if (!biometricEnabled) {
      handlePinFallback();
      return;
    }

    if (!biometryType) {
      displayAlert('E0004');
      handlePinFallback();
      return;
    }

    try {
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: `Authenticate with ${biometryType}`,
      });

      if (success) {
        navigation.navigate('Home');
      } else {
        displayAlert('E0003');
        handlePinFallback();
      }
    } catch (error) {
      displayAlert('E0003');
      handlePinFallback();
    }
  };

  const handlePinLogin = () => {
    if (pinInput === pin) {
      navigation.navigate('Home');
    } else {
      displayAlert('E0006');
    }
  };


 

  const props = {
    handleBiometricLogin,
    handlePinLogin,
    pinInput,
    setPinInput,
    biometryType,
  };

  return <LoginScreenComp {...props} />;
};

export default LoginScreen;
