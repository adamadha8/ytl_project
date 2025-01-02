import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/auth/store';
import {RootStackParamList} from '../type';

let isTimeoutSet = false;

const useSessionTimeout = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTimeoutSet) return;
    isTimeoutSet = true;

    const timer = setTimeout(() => {
      Alert.alert(
        'Session Timeout',
        'Your session has timed out. Please log in again.',
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch(logout());
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
              isTimeoutSet = false;
            },
          },
        ],
        {cancelable: false},
      );
    }, 300000);

    return () => {
      clearTimeout(timer);
      isTimeoutSet = false;
    };
  }, [navigation, dispatch]);
};

export default useSessionTimeout;
