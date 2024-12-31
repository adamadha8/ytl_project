import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Award from "../../assets/award.png";
import BackgroundImg from "../../assets/bg.png";
import Home from "../../assets/home.png";
import Exchange from "../../assets/money.png";
import ProfilePic from "../../assets/profilepics.png";
import SendMoney from '../../assets/send.png';
import Withdraw from "../../assets/withdrawal.png";
import transactions from "../../constants/transactionData.json"; // JSON data
import { RootStackParamList } from '../../type';




type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleItemPress = (transaction: typeof transactions[0]) => {
    navigation.navigate('Details', { transaction: transaction });
  };

  return (
    <ImageBackground
    source={BackgroundImg}
    style={styles.backgroundImage} 
    resizeMode="cover" 
  >
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Hello, Adam Adha!</Text>
        <View style={styles.profileContainer}>
          <Image
          source={ProfilePic}
            style={styles.profileImage2}
          />
        </View>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>RM 250.000</Text>
      </View>

      {/* Action Buttons Section */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton}>
        <Image
        source={SendMoney}
            style={styles.profileImage}
          />
          <Text style={styles.actionButtonText}>Send It</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <Image
        source={Withdraw}
            style={styles.profileImage}
          />
          <Text style={styles.actionButtonText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <Image
        source={Home}
            style={styles.profileImage}
          />
          <Text style={styles.actionButtonText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=> navigation.navigate('History')}>
        
        <Image
        source={Exchange}
            style={styles.profileImage}
          />
          <Text style={styles.actionButtonText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Section */}
      <TouchableOpacity style={styles.promoSection}>
        
      <Image
        source={Award}
            style={styles.awardImage}
          />
          <View style={{flexDirection:'column'}}>
        <Text style={styles.promoTitle}>Upgrade to Premium Account</Text>
        <Text style={styles.promoSubtitle}>Get maximum service and more benefits!</Text>
        </View>
      </TouchableOpacity>

      {/* Transaction History Section */}
      <View style={styles.transactionSection}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction History</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('History')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {transactions.slice(0, 3).map((transaction, index) => (
           <TouchableOpacity
              onPress={() => handleItemPress(transaction)}
            >
            <View key={index} style={styles.transactionItem}>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionDescription}>{transaction.description}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>RM {transaction.amount}</Text>
            </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensures the background image fills the entire screen
    width: '100%', // Ensure the image covers the entire width of the screen
    height: '100%', // Ensure the image covers the entire height of the screen
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002f56',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  profileImage2: {
    width: '100%',
    height: '100%',
  },
  awardImage:{
    marginRight:10,
width:40,
height:40
  },
  balanceSection: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#0e2696',
    marginBottom: 2,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002f56',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  actionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#495057',
    fontSize: 12,
    marginTop:5,
    fontWeight: 'bold',
  },
  promoSection: {
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#d4edda',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 8,
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#155724',
  },
  transactionSection: {
    marginBottom: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002f56',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  viewAllText: {
    fontSize: 14,
    color: '#0e2696',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  transactionIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#e9ecef',
    borderRadius: 20,
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  transactionDate: {
    fontSize: 14,
    color: '#868e96',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f4c9c',
  },
});

export default HomeScreen;
