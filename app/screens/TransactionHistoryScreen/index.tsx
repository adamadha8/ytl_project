import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import transactions from '../../constants/transactionData.json';
import { RootStackParamList } from '../../type';
import TransactionHistoryScreenComp from './component';

const rnBiometrics = new ReactNativeBiometrics();

const TransactionHistoryScreen: React.FC = () => {
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBiometricAuthentication = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate to view amounts',
      });

      if (success) {
        setShowAmounts(true);
        Alert.alert('Success', 'Amounts are now visible');
      } else {
        Alert.alert('Error', 'Biometric authentication failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Biometric authentication not available');
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
    navigation.navigate('Details', { transaction: item });
  };

  const props = {
    data,
    showAmounts,
    refreshing,
    setData,
    setRefreshing,
    setShowAmounts,
    navigation,
    handleBiometricAuthentication,
    handleRefresh,
    handleItemPress
  };

  return <TransactionHistoryScreenComp {...props} />;

};


export default TransactionHistoryScreen;
