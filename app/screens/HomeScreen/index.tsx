import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import transactions from "../../constants/transactionData.json";
import useSessionTimeout from '../../hooks/useSessionTimeout';
import { RootStackParamList } from '../../type';
import HomeScreenComp from './component';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  useSessionTimeout();


  const handleItemPress = (transaction: typeof transactions[0]) => {
    navigation.navigate('Details', { transaction: transaction });
  };

  const handleTransactionHistory = () => {
    navigation.navigate('History')
  }

  const props = {
  handleItemPress,
  handleTransactionHistory,
  };

  return <HomeScreenComp {...props} />;

};


export default HomeScreen;
