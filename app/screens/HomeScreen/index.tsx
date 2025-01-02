import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert, BackHandler } from 'react-native';
import alertMsg from "../../constants/errorList.json";
import useConnection from '../../hooks/useConnection';
import useSessionTimeout from '../../hooks/useSessionTimeout';
import { RootStackParamList } from '../../type';
import HomeScreenComp from './component';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const isConnected = useConnection(); 
  const {E0002} = alertMsg.error
  useSessionTimeout();

 
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
          onPress: () => BackHandler.exitApp(), 
        },
      ],
      { cancelable: false }
    );
    return true; 
  };

  useFocusEffect(
    React.useCallback(() => {
      const backHandlerListener = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress
      );

      return () => {
        backHandlerListener.remove();
      };
    }, [])
  );


  const handleTransactionHistory = () => {
        if (!isConnected) {
          Alert.alert(E0002.title,E0002.message);
          return;
        }
        else{
          navigation.navigate('History')
        }
  }

  const props = {
  handleTransactionHistory,
  };

  return <HomeScreenComp {...props} />;

};


export default HomeScreen;
