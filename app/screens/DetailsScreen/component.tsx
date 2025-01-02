import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ThankYouIcon from '../../assets/give.png';
import {DetailsScreenProps} from '../../type';
import {styles} from './styles';

const DetailsScreenComp: React.FC<DetailsScreenProps> = ({
  transaction,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text
          style={[
            styles.statusText,
            {
              color: transaction.status === 'Success' ? '#28a745' : '#dc3545',
            },
          ]}>
          {transaction.status === 'Success'
            ? 'Payment Success'
            : 'Payment Failed'}
        </Text>
        <Text style={styles.amount}>RM{transaction.amount}</Text>
      </View>

      <View style={styles.recipientInfo}>
        <Text style={styles.merchant}>{transaction.recipient}</Text>
        <View style={styles.transactionSummary}>
          <View style={styles.summaryText}>
            <Text style={styles.accLabel}>Account Number</Text>

            <Text style={styles.detailsLabel}>Details</Text>
          </View>
          <View style={styles.summaryText}>
            <Text style={styles.tipLabel}>{transaction.accNo}</Text>

            <Text style={styles.totalLabel}>{transaction.description}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.pointsContainer,
          {
            backgroundColor:
              transaction.status === 'Success' ? '#e8f5e9' : '#f8d7da',
          },
        ]}>
        <Text
          style={[
            styles.pointsText,
            {
              color: transaction.status === 'Success' ? '#28a745' : '#dc3545',
            },
          ]}>
          {transaction.status === 'Success'
            ? 'Congrats! You get rewarded 12 points!'
            : 'Failed! You will not receive any points'}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Transaction Details</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.detailTextLeft}>Reference Number:</Text>
            <Text style={styles.detailTextLeft}>Date & Time:</Text>
            <Text style={styles.detailTextLeft}>Transfer Method:</Text>
            <Text style={styles.detailTextLeft}>Recipient Bank:</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.detailText}>{transaction.referenceNo}</Text>
            <Text style={styles.detailText}>{transaction.date}</Text>
            <Text style={styles.detailText}>{transaction.transferMethod}</Text>
            <Text style={styles.detailText}>{transaction.recipientBank}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.detailTextLeft}>From Account:</Text>
            <Text style={styles.detailTextLeft}>Account Type:</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.detailText}>{transaction.fromAcc}</Text>
            <Text style={styles.detailText}>{transaction.type}</Text>
          </View>
        </View>
      </View>

      <View style={styles.helpContainer}>
        <Image source={ThankYouIcon} style={styles.helpIcon} />
        <Text style={styles.helpText}>Thank you for choosing our Bank!</Text>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreenComp;
