import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    
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
  promoFlex:
  {flexDirection:'column'},
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
