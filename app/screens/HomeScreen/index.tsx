import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { StackNavigationProp } from '@react-navigation/stack';  // Import StackNavigationProp
import { RootStackParamList } from '../../type';  // Import the types
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();  // Use the typed navigation
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalBalanceLabel}>Total balance</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>RM55.26</Text>
          <TouchableOpacity>
            <Text style={styles.balanceIcon}>👁️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceInfo}>Balance info </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Scan QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=> navigation.navigate('History')}>
          <Text style={styles.actionButtonText}>Send Money</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.accountSection}>
        <Text style={styles.sectionTitle}>Your everyday account</Text>
        <View style={styles.accountCards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Main account</Text>
            <Text style={styles.cardAmount}>RM55.26</Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>View transactions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Savings Pockets</Text>
            <Text style={styles.cardInfo}>Earn 2.00% p.a.</Text>
            <Text style={styles.cardInfo}>Withdraw anytime</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.promoSection}>
        <Text style={styles.sectionTitle}>For you today</Text>
        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>Cyber Fraud Protect</Text>
          <Text style={styles.promoSubtitle}>
            Get covered against online scams from RM1 per month.
          </Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Get protected now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'gray', // Background color matching the design
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  totalBalanceLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  balanceIcon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  balanceInfo: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#6f24a1',
    paddingVertical: 16,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  accountSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#2c153d',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  cardAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLink: {
    color: '#4c9fe0',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  cardInfo: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 8,
  },
  cardButton: {
    backgroundColor: '#4c9fe0',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  promoSection: {
    marginBottom: 20,
  },
  promoCard: {
    backgroundColor: '#2c153d',
    padding: 16,
    borderRadius: 8,
  },
  promoTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  promoSubtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 16,
  },
  promoButton: {
    backgroundColor: '#4c9fe0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  promoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
