import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParamList } from '../type';

const useSessionTimeout = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 300000);
    return () => clearTimeout(timer);
  }, [navigation]);
};

export default useSessionTimeout;
