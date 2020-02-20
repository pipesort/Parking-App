import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardSlider, SelectBox} from 'react-native-pipesort-component';
function AccountPage() {
  const cardItems = [
    {
      title: 'Coupons',
      description: 'Coming soon',
      backgroundImage: {
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMZjT7fIA2u6NeYso9kv8QlZI2htkCUV4FuHSjdxXID2E58NKh',
      },
    },
    {
      title: 'Malls',
      description: 'Coming soon',
      backgroundImage: {
        uri:
          'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/91/33.jpg',
      },
    },
    {
      title: 'Theatres',
      description: 'Coming soon',
      backgroundImage: {
        uri:
          'https://th.thgim.com/news/national/tamil-nadu/article22788310.ece/alternates/FREE_435/18THMALLPHOTO',
      },
    },
  
  ];
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#02d9c0',
          borderBottomStartRadius: 30,
          borderBottomEndRadius: 30,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://www.cheatsheet.com/wp-content/uploads/2019/10/Robert-Downey-Jr-1-1024x790.jpg',
            }}
            style={{width: 80, height: 80, borderRadius: 100 / 2}}
          />
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Logesh Das
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 180,
          padding: 20,
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 15,
          marginTop: -50,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Balance</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rs.814.00</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: '#02d9c0',
              height: 80,
              width: '30%',
              padding: 5,
              borderRadius: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="wallet-outline"
                color={'white'}
                size={30}
                style={{textAlign: 'center'}}
              />
              <Text style={{color: 'white'}}>Add money</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#02d9c0',
              height: 80,
              width: '30%',
              padding: 5,
              borderRadius: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="card-bulleted"
                color={'white'}
                size={30}
                style={{textAlign: 'center'}}
              />
              <Text style={{color: 'white'}}>Payments</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#02d9c0',
              height: 80,
              width: '30%',
              padding: 5,
              borderRadius: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="account"
                color={'white'}
                size={30}
                style={{textAlign: 'center'}}
              />
              <Text style={{color: 'white'}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#d6d6d6',
          marginTop: 10,
        }}>
        <CardSlider data={cardItems} />
      </View>
    </>
  );
}

export default AccountPage;
