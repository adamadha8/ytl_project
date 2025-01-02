import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

const useConnection = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected); 
      if (!state.isConnected) {
        Alert.alert('No Internet', 'You need an internet connection for some features');
      }
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};

export default useConnection;
