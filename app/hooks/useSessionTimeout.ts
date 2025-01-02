import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/auth/store';
import {RootStackParamList} from '../type';

const useSessionTimeout = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(logout());
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 300000);
    return () => clearTimeout(timer);
  }, [navigation]);
};

export default useSessionTimeout;
