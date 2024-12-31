import React, { useCallback, useState } from 'react';
import {
    Alert,
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import transactions from '../../constants/transactionData.json';

const rnBiometrics = new ReactNativeBiometrics();

const TransactionHistoryScreen: React.FC = () => {
  const [data, setData] = useState(transactions);
  const [refreshing, setRefreshing] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);

  const handleBiometricAuthentication = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate to view amounts',
      });

      if (success) {
        setShowAmounts(true);
        Alert.alert('Success', 'Amounts are now visible');
      } else {
        Alert.alert('Error', 'Biometric authentication failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Biometric authentication not available');
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...data]); 
      setRefreshing(false);
    }, 1500);
  }, [data]);

  const renderItem = ({ item }: { item: typeof transactions[0] }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.type}>{item.type.toUpperCase()}</Text>
      <Text style={styles.amount}>
        {showAmounts ? `$${item.amount.toFixed(2)}` : '****'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.authButton} onPress={handleBiometricAuthentication}>
        <Text style={styles.authButtonText}>Reveal Amounts</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  authButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 16,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  type: {
    fontSize: 14,
    color: '#6200ee',
    marginBottom: 4,
    fontWeight: '500',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TransactionHistoryScreen;
