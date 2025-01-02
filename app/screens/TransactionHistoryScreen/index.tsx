import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import alert from '../../constants/errorList.json';
import transactions from '../../constants/transactionData.json';
import useSessionTimeout from '../../hooks/useSessionTimeout';
import { RootStackParamList } from '../../type';
import TransactionHistoryScreenComp from './component';

const rnBiometrics = new ReactNativeBiometrics();

const TransactionHistoryScreen: React.FC = () => {
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);
  const [biometricAttempts, setBiometricAttempts] = useState(0);
  const [pinAttempts, setPinAttempts] = useState(0);
  const [isPinInputVisible, setIsPinInputVisible] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useSessionTimeout();

  const displayAlert = (code: keyof typeof alert.error) => {
    const alertMessage = alert.error[code];
    Alert.alert(alertMessage.message);
  };

  const handleBiometricAuthentication = async () => {
    try {
      const { available } = await rnBiometrics.isSensorAvailable();

      if (!available) {
        setIsPinInputVisible(true);
        return;
      }

      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate to view amounts',
      });

      if (success) {
        setShowAmounts(true);
        setBiometricAttempts(0); // Reset attempts on success
      } else {
        setBiometricAttempts((prev) => prev + 1);
        if (biometricAttempts >= 1) {
          setIsPinInputVisible(true); // Fallback to PIN after 2 failures
        } else {
          displayAlert('E0003');
        }
      }
    } catch (error) {
      displayAlert('E0001');
    }
  };

  const handlePinSubmit = () => {
    const correctPin = '123456'; // Replace with a secure PIN validation logic

    if (enteredPin === correctPin) {
      setShowAmounts(true);
      setPinAttempts(0); // Reset attempts on success
      setIsPinInputVisible(false);
    } else {
      setPinAttempts((prev) => prev + 1);
      if (pinAttempts >= 2) {
        navigation.navigate('Login'); // Redirect to login after 2 incorrect attempts
      } else {
        Alert.alert('E0006');
      }
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...data]);
      setRefreshing(false);
    }, 1500);
  }, [data]);

  const handleItemPress = (item: typeof transactions[0]) => {
    if (!showAmounts) {
      handleBiometricAuthentication();
    } else {
      navigation.navigate('Details', { transaction: item });
    }
  };
  

  const props = {
    data,
    showAmounts,
    refreshing,
    handleBiometricAuthentication,
    handleRefresh,
    handleItemPress,
    isPinInputVisible,
    enteredPin,
    setEnteredPin,
    handlePinSubmit
  };

  return (
    <>
      <TransactionHistoryScreenComp {...props} />

    </>
  );
};

export default TransactionHistoryScreen;
