import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import alertMsg from '../constants/errorList.json';

const useConnection = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const {E0009} = alertMsg.error;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected);
      if (!state.isConnected) {
        Alert.alert(E0009.title, E0009.message);
      }
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};

export default useConnection;
