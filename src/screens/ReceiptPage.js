import React from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

function ReceiptPage({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 20,
          marginTop: 20,
          color:'#02d9c0'
        }}>
        Pheonix Marketcity, Chennai
      </Text>
      <Swiper horizontal={false} showsPagination={false} loop={false}>
        <View
          style={{
            backgroundColor: '#e0e0e0',
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1.5,
                width: '90%',
                height: '90%',
                margin: 10,
                borderRadius: 15,
                padding: 10,
                borderColor:'#02d9c0'
              }}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color:'#02d9c0'
                  }}>
                  Parking Receipt
                </Text>
              </View>
              <View style={{marginTop: 30}}>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  BIKE PARK : RS.30/HOUR
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontFamily: 'monospace'}}>ENTRY TIME:</Text>
                  <Text style={{fontFamily: 'monospace'}}>02/17/2020</Text>
                  <Text style={{fontFamily: 'monospace'}}>11:28:08 AM</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text style={{fontFamily: 'monospace'}}>EXIT TIME:</Text>
                  <Text style={{marginLeft: 10, fontFamily: 'monospace'}}>
                    02/17/2020
                  </Text>
                  <Text style={{fontFamily: 'monospace'}}>11:28:08 AM</Text>
                </View>
                {/* <Text>{route.params ? route.params.itemId : 'N/A'}</Text>
            <Text>{route.params ? route.params.otherParam : 'N/A'}</Text>
            <Text>{route.params ? route.params.param : 'N/A'}</Text> */}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color:'#02d9c0'
                  }}>
                  THANK YOU AND DRIVE SAFELY!
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#e0e0e0',
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1.5,
                width: '90%',
                height: '90%',
                margin: 10,
                borderRadius: 15,
                padding: 10,
                borderColor:'#02d9c0'
              }}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color:'#02d9c0'
                  }}>
                  Parking Receipt
                </Text>
              </View>
              <View style={{marginTop: 30}}>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  BIKE PARK : RS.30/HOUR
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontFamily: 'monospace'}}>ENTRY TIME:</Text>
                  <Text style={{fontFamily: 'monospace'}}>02/17/2020</Text>
                  <Text style={{fontFamily: 'monospace'}}>11:28:08 AM</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text style={{fontFamily: 'monospace'}}>EXIT TIME:</Text>
                  <Text style={{marginLeft: 10, fontFamily: 'monospace'}}>
                    02/17/2020
                  </Text>
                  <Text style={{fontFamily: 'monospace'}}>11:28:08 AM</Text>
                </View>
                {/* <Text>{route.params ? route.params.itemId : 'N/A'}</Text>
            <Text>{route.params ? route.params.otherParam : 'N/A'}</Text>
            <Text>{route.params ? route.params.param : 'N/A'}</Text> */}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color:'#02d9c0'
                  }}>
                  THANK YOU AND DRIVE SAFELY!
                </Text>
              </View>
            </View>
          
          </View>
        </View>
      </Swiper>
    </View>
  );
}

export default ReceiptPage;
