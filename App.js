import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import QrScanner from './src/screens/QrScanner';
import ReceiptPage from './src/screens/ReceiptPage';
import AccountPage from './src/screens/AccountPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="QrScanner"
          component={QrScanner}
          options={{
            tabBarLabel: 'QrScanner',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="barcode-scan" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Receipt"
          component={ReceiptPage}
          options={{
            tabBarLabel: 'Receipt',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="receipt" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AccountPage}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="wallet-outline" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
