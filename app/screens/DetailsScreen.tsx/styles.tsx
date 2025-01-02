import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    statusContainer: {
      alignItems: 'center',
      marginBottom: 20,
      marginTop:20
    },
    statusText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    amount: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 8,
    },
    transactionSummary: {
      flexDirection: 'row',
      alignItems: 'center',
  
    },
    icon: {
      width: 50,
      height: 50,
      marginRight: 16,
      borderRadius: 8,
    },
    summaryText: {
      flex: 1,
  
    },
    merchantLabel: {
      textAlign:'left',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    detailsLabel: {
      textAlign:'left',
      fontSize: 16,
      color: '#555',
      marginTop: 4,
    },
    accLabel: {
      textAlign:'left',
      fontSize: 16,
      color: '#555',
      marginTop: 4,
    },
    merchant: {
      textAlign:'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    totalLabel: {
      textAlign:'right',
      fontSize: 16,
      color: '#000',
      marginTop: 4,
    },
    tipLabel: {
      textAlign:'right',
      fontSize: 16,
      color: '#000',
      marginTop: 4,
    },
    pointsContainer: {
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 16,
    },
    pointsText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailsContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    detailsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 12,
    },
    detailTextLeft: {
      textAlign:'left',
      fontSize: 16,
      color: '#555',
      marginBottom: 8,
    },
    detailText: {
      textAlign:'right',
      fontSize: 16,
      color: '#000',
      marginBottom: 8,
    },
    helpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    helpIcon: {
      width: 40,
      height: 40,
      marginLeft:10,
      marginRight: 20,
      borderRadius: 20,
    },
    helpText: {
      fontSize: 16,
      color: '#333',
      flex: 1,
      fontWeight:'bold'
    },
    doneButton: {
      backgroundColor: '#6c63ff',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    doneButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    column: {
      flex: 1,
      paddingRight: 10, // Add some spacing between the columns
    },
    recipientInfo:{backgroundColor:'white',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,}
  });