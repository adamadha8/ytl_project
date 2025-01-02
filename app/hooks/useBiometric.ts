import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import alertMsg from "../constants/errorList.json";

const rnBiometrics = new ReactNativeBiometrics();

const useBiometric = () => {
  const [biometricType, setBiometricType] = useState<null | 'Face' | 'Fingerprint'>(null); // Add explicit type
  const [biometricAttempts, setBiometricAttempts] = useState(0);
  const { E0003, E0004, E0007,} = alertMsg.error;


  const initializeBiometric = useCallback(async () => {
    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (available && biometryType) {
        setBiometricType(biometryType === 'FaceID' ? 'Face' : 'Fingerprint');
      } else {
        setBiometricType(null);
      }
    } catch (error) {
      setBiometricType(null);
    }
  }, []);

  const authenticate = useCallback(
    async (promptMessage = 'Authenticate') => {
      try {
        if (!biometricType) {
          Alert.alert(E0004.title,E0004.message);
          return { success: false };
        }

        const { success } = await rnBiometrics.simplePrompt({
          promptMessage,
        });

        if (success) {
          setBiometricAttempts(0);
          return { success: true };
        } else {
          setBiometricAttempts((prev) => prev + 1);
          Alert.alert(E0003.title,E0003.message);
          return { success: false };
        }
      } catch (error) {
        Alert.alert(E0007.title,E0007.message);
        return { success: false };
      }
    },
    [biometricType]
  );

  return {
    biometricType,
    biometricAttempts,
    initializeBiometric,
    authenticate,
  };
};

export default useBiometric;
