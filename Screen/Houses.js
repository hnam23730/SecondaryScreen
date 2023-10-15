import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image,TextInput } from 'react-native';
import SearchIcon from '../assets/image/IconSearch.png';
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  const Home = () => {
    navigation.navigate('Home');
  };
  const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (text) => {
        setSearchQuery(text);
    };
  const [houses, setHouses] = useState([
    {
      id: 1,
      image: require('../assets/image/anh1.png'),
      address: '1500 Polk St',
      day: '14 days ago',
      city: 'San Francisco, CA',
      price: '$5,875,000',
    },
    {
      id: 2,
      image: require('../assets/image/anh2.png'),
      address: '1010 Steiner St',
      day: '4 hours ago',
      city: 'San Francisco, CA',
      price: '$3,279,000',
    },
    {
      id: 3,
      image: require('../assets/image/anh3.png'),
      address: '76 Saturn St',
      day: '9 days ago',
      city: 'San Francisco, CA',
      price: '$498,000',
    },
    {
      id: 4,
      image: require('../assets/image/anh4.png'),
      address: '246 Sussex St',
      day: '2 hours ago',
      city: 'San Francisco, CA',
      price: '$899,000',
    },
    {
      id: 5,
      image: require('../assets/image/Condos.png'),
      address: '278 Brannan St',
      day: '7 days ago',
      city: 'San Francisco, CA',
      price: '$600,000',
    },
  ]);
  

  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
      </View>
      <FlatList
        data={houses}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.imageContainer}>
              <Image
              source={item.image}
              style={styles.houseImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.city}>{item.day}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
    backgroundColor: '#fafafa',
  },
  houseImage: {
    width: 150, 
    height: 150,
  },
  searchBarContainer: {
    width: 300,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 50,
  },
  searchIcon: {
    width: 20, 
    height: 20,
    marginRight: 10,
  },
  textContainer:{
    alignSelf:'flex-start',
    position:'absolute',
    marginLeft:10,
    paddingLeft:150,
  },
  address:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  address: {
    fontSize: 16,
    margin: 5,
  },
  city: {
    fontSize: 14,
    color: '#666666',
    margin: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    paddingLeft: 130,
  },
});

export default App;
