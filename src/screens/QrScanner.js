import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {QRScannerRectView} from 'react-native-qrcode-scanner-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';

function QRScanner({navigation}) {
  const dispatch = useDispatch();

  const barcodeReceived = event => {
    console.log('Type: ' + event.type + '\nData: ' + event.data)
    const param = 'Type: ' + event.type + '\nData: ' + event.data
    navigation.navigate('Receipt', {
      itemId: 86,
      otherParam: 'anything you want here',
      param
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <RNCamera
          style={styles.preview}
          onBarCodeRead={barcodeReceived}
          scanBarAnimateReverse>
          <QRScannerRectView hintText="" />
          <TouchableOpacity
            onPress={() => {
              // dispatch({type: 'HOME'});  
              navigation.navigate('Receipt', {
                itemId: 86,
                otherParam: 'anything you want here',
                
              });   
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <MaterialCommunityIcons name="home" color={'white'} size={20} />
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </RNCamera>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
  preview: {
    flex: 1,
  },
});
export default QRScanner;
