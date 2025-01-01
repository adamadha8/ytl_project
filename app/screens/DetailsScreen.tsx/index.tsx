import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../type';
import DetailsScreenComp from './component';
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;
  const navigation = useNavigation();

  const props = {
    transaction,
    navigation,
  };

  return <DetailsScreenComp {...props} />;

}



export default DetailsScreen;
