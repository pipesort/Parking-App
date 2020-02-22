import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SearchInput, {createFilter} from 'react-native-search-filter';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardSlider} from 'react-native-pipesort-component';

const KEYS_TO_FILTERS = ['storeName'];

const searchData = [
  {
    storeName: 'Basics',
    location: '1st floor, Phase A, Right corner',
    storeImg:
      'https://api.peepingpeacock.com:8443/service/peacock/images/outlet-image-Basics-life_Payyanur-Kannur-060618-094158-277.6.png',
  },
 
  {
    storeName: 'Food court',
    location: '3rd floor, Phase D, Right-left corner',
    storeImg:
      'https://www.brandcrowd.com/gallery/brands/pictures/picture15282841673348.png',
  },
  {
    storeName: 'KFC',
    location: '1st floor, Phase C, Left-right corner',
    storeImg:
      'https://banner2.cleanpng.com/20180919/ju/kisspng-colonel-sanders-kfc-fried-chicken-restaurant-5ba29509a6e801.1922653615373816416837.jpg',
  },
  {
    storeName: 'Max',
    location: '2nd floor, Phase B, Right corner',
    storeImg:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082017/untitled-1_132.png?itok=iKeHld34',
  },

  {
    storeName: 'Pizza Hut',
    location: 'Ground floor, Phase A1, Left corner',
    storeImg:
      'https://logos-download.com/wp-content/uploads/2016/04/Pizza_Hut_logo_logotype.png',
  },
  {
    storeName: 'PVR Cinemas',
    location: '4th floor, Phase A, Left corner',
    storeImg:
      'https://pngimage.net/wp-content/uploads/2018/06/pvr-logo-png-1.png',
  },
];

const cardItems = [
  {
    title: 'Basics',
    description: '1st floor, Phase A, Right corner',
    backgroundImage: {
      uri:
        'https://api.peepingpeacock.com:8443/service/peacock/images/outlet-image-Basics-life_Payyanur-Kannur-060618-094158-277.6.png',
    },
  },
  {
    title: 'Pizza Hut',
    description: 'Ground floor, Phase A1, Left corner',
    backgroundImage: {
      uri:
        'https://i.dlpng.com/static/png/6873164_preview.png',
    },
  },
  {
    title: 'PVR',
    description: '4th floor, Phase A, Left corner',
    backgroundImage: {
      uri:
        'https://pngimage.net/wp-content/uploads/2018/06/pvr-logo-png-1.png',
    },
  },
  
];


const data = [
  {
    title: 'Phase A1',
    description: 'Ground floor, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonTitle: 'Go there',
    cardBackground: '#307db8',
  },
  {
      title: 'Phase A',
      description: '1st floor, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonTitle: 'Go there',
      cardBackground: '#8ab32b',
  },
  {
    title: 'Phase B',
    description: '2nd floor, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonTitle: 'Go there',
    cardBackground: '#b3276d',
  },
  {
      title: 'Phase C',
      description: '3rd floor, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonTitle: 'Go there',
      cardBackground: 'black',
  },
  {
    title: 'Phase D',
    description: '4th floor, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonTitle: 'Go there',
    cardBackground: '#e0c707',
},
];

function StoreLocator() {
  const [isSearch, setSearch] = useState('');
  const [isOpen, setOpen] = useState(false);
  const filteredEmails = searchData.filter(
    createFilter(isSearch, KEYS_TO_FILTERS),
  );

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <MaterialCommunityIcons
          name="map-marker-path"
          color={'#02d9c0'}
          size={25}
          style={{marginTop: 5, marginRight: 5}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#02d9c0',
            textAlign: 'center',
          }}>
          Store Locator
        </Text>
      </View>
      <View style={styles.SectionStyle}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
          }}>
          <MaterialCommunityIcons
            name="search-web"
            color={'#02d9c0'}
            size={25}
            style={{fontWeight: 'bold'}}
          />
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <Text style={{fontSize: 18, color: '#ababab', marginLeft: 10}}>
              Search for Shops,Theatres...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{margin: 5,marginTop:10}}>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            marginBottom: 8,
            color: '#02d9c0',
            fontWeight: 'bold',
          }}>
          Top brands around you
        </Text>
        <CardSlider data={cardItems} />
      </View>
      <View style={{margin: 5,marginTop:10}}>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            marginBottom: 8,
            color: '#02d9c0',
            fontWeight: 'bold',
          }}>
          Phases of mall
        </Text>
        <CardSlider data={data} />
      </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={() => {
          setOpen(false);
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
              setSearch('')
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'#02d9c0'}
                size={30}
                style={{marginTop: 5, marginLeft: 5, fontWeight: 'bold'}}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.SectionStyles}>
            <MaterialCommunityIcons
              name="search-web"
              color={'#02d9c0'}
              size={25}
            />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              onChangeText={term => {
                setSearch(term);
              }}
              placeholder="Search for Shops,Theatres..."
              underlineColorAndroid="transparent"
              autoFocus={true}
            />
          </View>
          
          <ScrollView>
            {filteredEmails.map(searchData => {
              return (
                <TouchableOpacity
                  key={searchData.id}
                  style={styles.storeName}>
                  <View>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                      <Image
                        source={{uri: searchData.storeImg}}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 100,
                          marginTop: 10,
                        }}
                      />
                      <Text style={{fontSize: 22, marginLeft: 15,fontWeight:'bold'}}>
                        {searchData.storeName}
                      </Text>
                    </View>
                    <Text style={styles.location}>{searchData.location}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

export default StoreLocator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  storeName: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    marginBottom:-5
  },
  location: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 18,
    marginLeft: 75,
    marginTop: -22,
  },
  searchInput: {
    padding: 15,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 15,
    width: '95%',
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#bfbfbf',
    borderRadius: 10,
    margin: 10,
  },
  SectionStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#bfbfbf',
    height: 55,
    borderRadius: 15,
    margin: 10,
    padding: 5,
  },
});
