import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Alert, BackHandler} from 'react-native';
import {useDispatch} from 'react-redux';
import alertMsg from '../../constants/errorList.json';
import useConnection from '../../hooks/useConnection';
import useSessionTimeout from '../../hooks/useSessionTimeout';
import {logout} from '../../redux/auth/store';
import {RootStackParamList} from '../../type';
import HomeScreenComp from './component';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const isConnected = useConnection();
  const {E0002} = alertMsg.error;
  const dispatch = useDispatch();
  useSessionTimeout();

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const handleBackPress = () => {
    Alert.alert(
      'Exit App',
      'Are you sure you want to exit?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(logout());
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: false},
    );
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      const backHandlerListener = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );

      return () => {
        backHandlerListener.remove();
      };
    }, []),
  );

  const handleTransactionHistory = () => {
    if (!isConnected) {
      Alert.alert(E0002.title, E0002.message);
      return;
    } else {
      navigation.navigate('History');
    }
  };

  const props = {
    handleLogout,
    handleTransactionHistory,
  };

  return <HomeScreenComp {...props} />;
};

export default HomeScreen;
