import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet,Alert} from 'react-native';
import {QRScannerRectView} from 'react-native-qrcode-scanner-view';

import {RNCamera} from 'react-native-camera';

class CodeScan extends Component {

  renderTitleBar = () => <Text>Title</Text>;

  renderMenu = () => (
    <Text style={{color: 'white', textAlign: 'center', padding: 16}}>Menu</Text>
  );
  barcodeReceived = event => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
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

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <RNCamera
          style={styles.preview}
          onBarCodeRead={this.barcodeReceived}
          renderFooterView={this.renderMenu}
          scanBarAnimateReverse>
          <QRScannerRectView
            renderHeaderView={this.renderTitleBar}
            hintText="scan"
          />
        </RNCamera>
      </SafeAreaView>
    );
  }
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
export default CodeScan;
