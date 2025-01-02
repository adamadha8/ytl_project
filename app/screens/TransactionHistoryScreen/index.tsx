import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import alert from '../../constants/errorList.json';
import transactions from '../../constants/transactionData.json';
import useSessionTimeout from '../../hooks/useSessionTimeout';
import useBiometric from '../../hooks/useBiometric';
import { RootStackParamList } from '../../type';
import TransactionHistoryScreenComp from './component';

const TransactionHistoryScreen: React.FC = () => {
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);
  const [pinAttempts, setPinAttempts] = useState(0);
  const [isPinInputVisible, setIsPinInputVisible] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { biometricType, initializeBiometric, authenticate } = useBiometric();

  useSessionTimeout();

  useEffect(() => {
    initializeBiometric();
  }, [initializeBiometric]);

  const handleBiometricAuthentication = async () => {
    const { success } = await authenticate('Authenticate to view amounts');
    if (success) {
      setShowAmounts(true);
    } else {
      setIsPinInputVisible(true);
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
        navigation.navigate('Login'); 
      } else {
        Alert.alert('Incorrect PIN. Please try again.');
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
    handlePinSubmit,
    biometricType,
  };

  return <TransactionHistoryScreenComp {...props} />;
};

export default TransactionHistoryScreen;
