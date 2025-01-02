import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import {
  Alert,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import alert from '../../constants/errorList.json';
import transactions from '../../constants/transactionData.json';
import { RootStackParamList } from '../../type';
import TransactionHistoryScreenComp from './component';
import useSessionTimeout from '../../hooks/useSessionTimeout';

type ErrorCode = 'E0001' | 'E0002' | 'E0003' | 'E0004';

const rnBiometrics = new ReactNativeBiometrics();

const TransactionHistoryScreen: React.FC = () => {
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  useSessionTimeout();


const displayAlert = (code: ErrorCode) => {
  const alertMessage = alert.error[code];
  Alert.alert(alertMessage.message);
};

const handleBiometricAuthentication = async () => {
  try {
    const { success } = await rnBiometrics.simplePrompt({
      promptMessage: 'Authenticate to view amounts',
    });

    if (success) {
      setShowAmounts(true);
    } else {
      displayAlert('E0003'); 
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message.includes('NETWORK_ERROR')) {
        displayAlert('E0002');
      } else if (error.message.includes('AUTH_ERROR')) {
        displayAlert('E0003'); 
      } else {
        displayAlert('E0004');
      }
    } else {
      displayAlert('E0001');
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
