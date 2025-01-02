import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Award from "../../assets/award.png";
import BackgroundImg from "../../assets/bg.png";
import Home from "../../assets/home.png";
import Exchange from "../../assets/money.png";
import ProfilePic from "../../assets/profilepics.png";
import SendMoney from '../../assets/send.png';
import Withdraw from "../../assets/withdrawal.png";
import transactions from "../../constants/transactionData.json";
import { styles } from "./styles";

type HomeScreenProps = {
    handleItemPress: (transaction: typeof transactions[0]) => void;
    handleTransactionHistory: () => void;
  };
  
const HomeScreenComp: React.FC<HomeScreenProps> = ({handleItemPress, handleTransactionHistory}) => {
  return (
    <ImageBackground
    source={BackgroundImg}
    style={styles.backgroundImage} 
    resizeMode="cover" 
  >
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Hello, Adam Adha!</Text>
        <View style={styles.profileContainer}>
          <Image
          source={ProfilePic}
            style={styles.profileImage2}
          />
        </View>
      </View>

      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>RM 250.000</Text>
      </View>

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
        <TouchableOpacity style={styles.actionButton} onPress={handleTransactionHistory}>
        
        <Image
        source={Exchange}
            style={styles.profileImage}
          />
          <Text style={styles.actionButtonText}>History</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.promoSection}>
        
      <Image
        source={Award}
            style={styles.awardImage}
          />
          <View style={styles.promoFlex}>
        <Text style={styles.promoTitle}>Upgrade to Premium Account</Text>
        <Text style={styles.promoSubtitle}>Get maximum service and more benefits!</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.transactionSection}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction History</Text>
          <TouchableOpacity onPress={handleTransactionHistory}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {transactions.slice(0, 3).map((transaction, index) => (
           <TouchableOpacity
              key={transaction.id}
              onPress={() => handleTransactionHistory()}
            >
            <View key={index} style={styles.transactionItem}>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionDescription}>{transaction.description}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              <Text style={[styles.transactionAmount,{ color: transaction.status === 'Success' ? '#28a745' : '#dc3545'}]}>{transaction.status}</Text>
            </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
    </ImageBackground>

  );
};


export default HomeScreenComp;
