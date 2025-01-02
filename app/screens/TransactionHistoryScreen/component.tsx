import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import transactions from '../../constants/transactionData.json';
import {TransactionHistoryProps} from '../../type';
import {styles} from './styles';

const TransactionHistoryScreenComp: React.FC<TransactionHistoryProps> = ({
  handleLogin,
  data,
  showAmounts,
  refreshing,
  handleRefresh,
  handleItemPress,
  isPinInputVisible,
  pinInput,
  setPinInput,
  handlePinLogin,
}) => {
  const renderItem = ({item}: {item: (typeof transactions)[0]}) => (
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
              {color: item.status === 'Success' ? '#4CAF50' : '#F44336'},
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerHistory}>
        <Text style={styles.headerText}>Transaction History</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.list}
      />

      {isPinInputVisible && (
        <View style={styles.paddingInput}>
          <TextInput
            placeholder="Enter PIN (123456)"
            secureTextEntry={true}
            keyboardType="numeric"
            value={pinInput}
            onChangeText={setPinInput}
            onSubmitEditing={handlePinLogin}
            style={styles.pinVisible}
            placeholderTextColor="#aaa"
            returnKeyType="done"
            autoFocus={true}
          />
        </View>
      )}
      {!showAmounts && (
        <View>
          {isPinInputVisible && (
            <TouchableOpacity
              style={styles.authPinButton}
              onPress={() => handleLogin('PIN')}>
              <Text style={styles.authButtonText}>Authenticate (PIN)</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => handleLogin('Biometric')}>
            <Text style={styles.authButtonText}>Authenticate (Biometric)</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TransactionHistoryScreenComp;
