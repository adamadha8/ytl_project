import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../type'; 

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text style={styles.detail}>ID: {transaction.id}</Text>
      <Text style={styles.detail}>Description: {transaction.description}</Text>
      <Text style={styles.detail}>Date: {transaction.date}</Text>
      <Text style={styles.detail}>Type: {transaction.type.toUpperCase()}</Text>
      <Text style={styles.detail}>Amount: ${transaction.amount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginVertical: 8,
    color: '#333',
  },
});

export default DetailsScreen;
