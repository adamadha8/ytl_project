import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles'

import transactions from '../../constants/transactionData.json';


const TransactionHistoryScreenComp: React.FC<{
    data: any[];
    showAmounts: boolean;
    refreshing: boolean;
    handleBiometricAuthentication: () => void;
    handleRefresh: () => void;
    handleItemPress: (item: any) => void;
  }> = ({
    data,
    showAmounts,
    refreshing,
    handleBiometricAuthentication,
    handleRefresh,
    handleItemPress,
  }) => {

  const renderItem = ({ item }: { item: typeof transactions[0] }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.transactionItem}>
        <View style={styles.leftColumn}>
          <Text style={styles.recipientName}>{item.recipient}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.metadata}>{item.referenceNo}</Text>
        </View>
  
        <View style={styles.rightColumn}>
          <Text style={styles.amount}>
            {showAmounts ? `$${item.amount}` : '****'}
          </Text>
          <Text style={styles.metadata}>{item.date}</Text>
          <Text
            style={[
              styles.status,
              { color: item.status === 'Success' ? '#4CAF50' : '#F44336' },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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


export default TransactionHistoryScreenComp;
