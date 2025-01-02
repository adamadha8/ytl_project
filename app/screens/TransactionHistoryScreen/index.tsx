import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import alertMsg from '../../constants/errorList.json';
import transactions from '../../constants/transactionData.json';
import useBiometric from '../../hooks/useBiometric';
import useConnection from '../../hooks/useConnection';
import useSessionTimeout from '../../hooks/useSessionTimeout';
import {logout, RootState} from '../../redux/auth/store';
import {RootStackParamList} from '../../type';
import TransactionHistoryScreenComp from './component';

const TransactionHistoryScreen: React.FC = () => {
  const {biometricEnabled, pin} = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);
  const [pinAttempts, setPinAttempts] = useState(0);
  const [isPinInputVisible, setIsPinInputVisible] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {biometricType, initializeBiometric, authenticate} = useBiometric();
  const isConnected = useConnection();
  const dispatch = useDispatch();
  const {E0002, E0008} = alertMsg.error;

  useSessionTimeout();

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...data]);
      setRefreshing(false);
    }, 1500);
  }, [data]);

  useEffect(() => {
    initializeBiometric();
  }, [initializeBiometric]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const handleBiometricAuthentication = async () => {
    const {success} = await authenticate('Authenticate to view amounts');
    if (success) {
      setShowAmounts(true);
      setIsPinInputVisible(false);
    } else {
      setIsPinInputVisible(true);
    }
  };

  const handlePinLogin = () => {
    if (pinInput === pin) {
      setShowAmounts(true);
      setPinAttempts(0);
      setIsPinInputVisible(false);
    } else {
      setPinAttempts(prev => prev + 1);
      if (pinAttempts >= 2) {
        handleLogout();
      } else {
        Alert.alert(E0008.title, E0008.message);
      }
    }
  };

  const handleLogin = async (type: 'PIN' | 'Biometric') => {
    if (!isConnected) {
      Alert.alert(E0002.title, E0002.message);
      return;
    }

    if (type === 'PIN') {
      handlePinLogin();
    } else if (type === 'Biometric') {
      handleBiometricAuthentication();
    }
  };

  const handleItemPress = (item: (typeof transactions)[0]) => {
    if (!showAmounts) {
      handleBiometricAuthentication();
    } else {
      navigation.navigate('Details', {transaction: item});
    }
  };

  const props = {
    handleLogin,
    data,
    showAmounts,
    refreshing,
    handleBiometricAuthentication,
    handleRefresh,
    handleItemPress,
    isPinInputVisible,
    pinInput,
    setPinInput,
    biometricType,
    handlePinLogin,
  };

  return <TransactionHistoryScreenComp {...props} />;
};

export default TransactionHistoryScreen;
