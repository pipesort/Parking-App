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
import Modal from 'react-native-modal';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';

function QRScanner() {
  const [isOpen, setOpen] = useState(true);
  const [isBike, setBike] = useState(false);
  const [isCar, setCar] = useState(false);
  const dispatch = useDispatch();
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

          <>
            <RNCamera
              style={styles.preview}
              onBarCodeRead={barcodeReceived}
              scanBarAnimateReverse>
              <QRScannerRectView hintText="Bike" />
              <TouchableOpacity
                onPress={() => {
                  setOpen(!isOpen);
                  setBike(isBike);
                  setCar(isCar);
                  dispatch({type: 'HOME'});
                }}>
                <View
                  style={{
                    backgroundColor: '#595757',
                    height: 40,
                    width: '30%',
                    borderRadius: 10,
                    marginBottom: 20,
                    marginLeft: 140,
                    marginRight: 140,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 25,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    Home
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
