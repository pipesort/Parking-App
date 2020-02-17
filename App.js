import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QrScanner from './src/screens/QrScanner';
import ReceiptPage from './src/screens/ReceiptPage';
import AccountPage from './src/screens/AccountPage';
import HomeScreen from './src/screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const isClicked = useSelector(state => state.isClicked);
  console.log('isClicked', isClicked);
  return (
    <>
      {/* {isClicked == false ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : ( */}
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#02d9c0"
            inactiveColor="#b3acab"
            barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen
              name="QrScanner"
              component={QrScanner}
              options={{
                tabBarLabel: 'QrScanner',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="barcode-scan"
                    color={color}
                    size={25}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Receipt"
              component={ReceiptPage}
              options={{
                tabBarLabel: 'Receipt',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="receipt"
                    color={color}
                    size={25}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Settings"
              component={AccountPage}
              options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="wallet-outline"
                    color={color}
                    size={25}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      {/* )} */}
    </>
  );
}
