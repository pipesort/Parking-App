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
