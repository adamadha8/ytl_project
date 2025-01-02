import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/auth/store';
import DetailsScreen from './app/screens/DetailsScreen';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import TransactionHistoryScreen from './app/screens/TransactionHistoryScreen';
import {RootStackParamList} from './app/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#8AD1E7',
              },
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: 'YTL Project',
            }}
          />
          <Stack.Screen
            name="History"
            component={TransactionHistoryScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Transaction History',
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Receipt',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
