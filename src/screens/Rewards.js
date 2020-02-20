import React, {useState} from 'react';
import {Text, View, Image, Alert, FlatList} from 'react-native';
import ScratchCard from 'react-native-scratch-card';

function Rewards() {
  const [status, setStatus] = useState(0);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      text: 'You won',
      amount: "₹68"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      text: 'Better luck',
      amount: "next time!"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'You won',
        amount: "₹26"
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'You won',
        amount: "₹123"
      },
  ];
  return (
    <>
      <View
        style={{
          flex: 0.75,
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#02d9c0',
          borderBottomLeftRadius:40
        }}>
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 50,
              fontWeight: 'bold',
            }}>
            ₹217
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Total rewards</Text>
        </View>
      </View>

      <View style={{flex: 2, marginTop: 8}}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => (
            <ScratchCard
              brushSize={125}
              getPercent={percent => {
                setStatus(percent);
              }}
              onEnd={() => {
                console.log('Whooooo hey!');
              }}
              maxPercent={100}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '45%',
                height: 160,
                margin: 10,
              }}
              color={'#b3acab'}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  margin: 20,
                  borderWidth: 1.5,
                  borderColor: '#02d9c0',
                  borderStyle: 'dashed',
                  height: 200,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    // backgroundColor: 'red',
                    borderRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                  }}>
                  <Image
                    source={require('../assets/images/cup.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginLeft: 55,
                      marginRight: 65,
                      marginTop: 50,
                      backgroundColor: '#02d9c0',
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                     {item.amount}
                  </Text>
                </View>
              </View>
            </ScratchCard>
          )}
        />
      </View>
    </>
  );
}

export default Rewards;
