import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import {QRScannerRectView} from 'react-native-qrcode-scanner-view';

import {RNCamera} from 'react-native-camera';

function QRScanner() {
  const renderTitleBar = () => <Text>Title</Text>;

  const renderMenu = () => (
    <Text style={{color: 'white', textAlign: 'center', padding: 16}}>Menu</Text>
  );
  const barcodeReceived = event => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <RNCamera
        style={styles.preview}
        onBarCodeRead={barcodeReceived}
        renderFooterView={renderMenu}
        scanBarAnimateReverse>
        <QRScannerRectView renderHeaderView={renderTitleBar} hintText="Scan" />
      </RNCamera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    // padding: UI.scaleSize(16),
  },
  preview: {
    flex: 1,
  },
});
export default QRScanner;
