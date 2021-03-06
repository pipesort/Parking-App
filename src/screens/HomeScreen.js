import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'CLICKED'});
    }, 1000);
  });
  return (
    <ImageBackground
      source={require('../assets/images/splash.jpeg')
       }
      style={{width: '100%', height: '100%', borderRadius: 20}}>
      {/* <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'CLICKED'});
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#595757',
                padding: 10,
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons
                name="motorbike"
                color={'white'}
                size={25}
              />
              Bike
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'CLICKED'});
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#595757',
                padding: 10,
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons
                name="car-multiple"
                color={'white'}
                size={25}
              />
              Car
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </ImageBackground>
  );
}

export default HomeScreen;
