import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';

import transactions from '../../constants/transactionData.json';


const TransactionHistoryScreenComp: React.FC<{
    data: any[];
    showAmounts: boolean;
    refreshing: boolean;
    handleBiometricAuthentication: () => void;
    handleRefresh: () => void;
    handleItemPress: (item: any) => void;
    isPinInputVisible: boolean;
    enteredPin: string;
    setEnteredPin: React.Dispatch<React.SetStateAction<string>>;
    handlePinSubmit: () => void;
  }> = ({
    data,
    showAmounts,
    refreshing,
    handleBiometricAuthentication,
    handleRefresh,
    handleItemPress,
    isPinInputVisible,
    enteredPin,
    setEnteredPin,
    handlePinSubmit
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
            {showAmounts ? `RM ${item.amount}` : '****'}
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
     {!showAmounts && ( 
      <TouchableOpacity style={styles.authButton} onPress={handleBiometricAuthentication}>
        <Text style={styles.authButtonText}>Reveal Amounts</Text>
      </TouchableOpacity>
     )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.list}
      />
            {isPinInputVisible && (
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Enter PIN (123456)"
            secureTextEntry={true}
            keyboardType="numeric"
            value={enteredPin}
            onChangeText={setEnteredPin}
            onSubmitEditing={handlePinSubmit}
            style={{
              borderWidth: 1,
              padding: 15,
              marginVertical: 10,
              borderRadius: 8,
              borderColor: '#ccc', // light border color
              backgroundColor: '#f9f9f9', // subtle background color
              fontSize: 18,
              fontWeight: '500',
              color: '#333',
            }}
            placeholderTextColor="#aaa" // lighter placeholder color
            returnKeyType="done" // changes return key to "done"
            autoFocus={true} // optional: if you want the field focused automatically
          />
       
        </View>
      )}
    </View>

    
  );
};


export default TransactionHistoryScreenComp;
