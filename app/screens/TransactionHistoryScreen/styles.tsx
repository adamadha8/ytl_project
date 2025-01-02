import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  headerHistory:{padding:10, paddingBottom:20},
  headerText:
  {fontSize:24, fontWeight:'bold'},
  authPinButton: {
    backgroundColor: '#03dac5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  authButton: {
    backgroundColor: '#6200ee',
    padding: 12,
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
        flexDirection: 'row',

    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  metadata: {
    fontSize: 12,
    color: '#666',
  },
  leftColumn: {
    flex: 1, // This will take up remaining space in the row
    justifyContent: 'flex-start',
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
 pinVisible:{
               borderWidth: 1,
               padding: 15,
               marginVertical: 10,
               borderRadius: 8,
               borderColor: '#ccc', // light border color
               backgroundColor: '#f9f9f9', // subtle background color
               fontSize: 18,
               fontWeight: '500',
               color: '#333',
             }
});