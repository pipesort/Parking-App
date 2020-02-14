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

function QRScanner() {
  const [isOpen, setOpen] = useState(true);
  const [isBike, setBike] = useState(false);
  const [isCar, setCar] = useState(false);
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
     
        {isOpen == !isOpen ? null : (
          <View>
            <Modal isVisible={isOpen}>
              <ImageBackground
                source={{
                  uri:
                    'https://images.wallpaperscraft.com/image/escalator_stairs_underground_122792_938x1668.jpg',
                }}
                style={{width: '100%', height: '100%',borderRadius:20}}>
              
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setBike(true);
                      setCar(false);
                      setOpen(false);
                    }}>
                    <View
                      style={{
                       flex:1,
                       justifyContent:'center',
                       alignItems:'center'
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 25,
                          textAlign: 'center',
                          color: 'white',
                          backgroundColor:'#595757',
                          padding:10,
                          borderRadius:10
                        }}>
                        Bike
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setCar(true);
                      setBike(false);
                      setOpen(false);
                    }}>
                    <View
                      style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 25,
                          textAlign: 'center',
                          color: 'white',
                          backgroundColor:'#595757',
                          padding:10,
                          borderRadius:10
                        }}>
                        Car
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </Modal>
          </View>
        )}

        {isBike === true ? (
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
                    Go back
                  </Text>
                </View>
              </TouchableOpacity>
            </RNCamera>
          </>
        ) : null}
        {isCar === true ? (
          <>
            <RNCamera
              style={styles.preview}
              onBarCodeRead={barcodeReceived}
              scanBarAnimateReverse>
              <QRScannerRectView hintText="Car" />
              <TouchableOpacity
                onPress={() => {
                  setOpen(!isOpen);
                  setBike(isBike);
                  setCar(isCar);
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
                    Go back
                  </Text>
                </View>
              </TouchableOpacity>
            </RNCamera>
          </>
        ) : null}
     
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
