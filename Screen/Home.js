import React, { useState } from "react";
import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity,FlatList} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Houses from './Houses';
import  Icon from "react-native-vector-icons/FontAwesome";
const HomeScreen = () => {
    const Tab = createBottomTabNavigator();
    const [categories, setCategories] = useState([
    {
      name: 'Houses',
      image: require('../assets/image/House.png'),
    },
    {
      name: 'Apartments',
      image: require('../assets/image/Apartment.png'),
    },
    {
      name: 'Condos',
      image: require('../assets/image/Condos.png'),
    },
    
  ]);
  const [seccategories, setsecCategories] = useState([
    {
      name: 'One Mission Bay',
      city: 'San Francisco, CA',
      image: require('../assets/image/anh1.png'),
      isLike : false,      
    },
    {
      name: '1410 Stiener St',
      city: 'San Francisco, CA',
      image: require('../assets/image/anh2.png'),
      isLike : false, 
    },
    {
      name: '246 Sussex St',
      city: 'San Francisco, CA',
      image: require('../assets/image/anh3.png'),
      isLike : false, 
    },
    {
      name: '1206 Market St',
      city: 'San Francisco, CA',
      image: require('../assets/image/anh4.png'),
      isLike : false, 
    },
  ]);
  function like(name){
    const update = seccategories.map((house)=>{
      if (house.name==name){
        house.isLike = !house.isLike;
      }
      return house;
    })
    setsecCategories(update);
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source = {require ('../assets/image/gai.png')} style={styles.image}/>
        <Text style={styles.ntitle}>Home</Text>
        <Icon name="plus-square-o" size={20} style={styles.nicon1} />
        <TouchableOpacity  style={styles.nicon2} onPress={Houses}>
        <Icon name="map-o" size={20} color={'green'}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Categories</Text>
      <FlatList 
        data={categories}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            style={styles.category}
            onPress={Houses}
          >
            <Image
              style={styles.categoryImage}
              source={item.image}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.title}>Houses</Text>
      <FlatList
      data={seccategories}
      numColumns={2} 
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.name}
          style={styles.seccategory}
          onPress={() => {
          }}
        >
          <Image
            style={styles.secategoryImage}
            source={item.image}
          />
          <TouchableOpacity style={styles.Icon} onPress={()=>like(item.name)}>
          <Icon size={25} name='heart'color={item.isLike?'green':'white'}/>
          </TouchableOpacity>
          <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.city}>{item.city}</Text>
            </View>
        </TouchableOpacity>
      )}
      />
      <TouchableOpacity style={styles.sbutton}>
            <Text style={styles.Text}>Show all (7) </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20,
    marginLeft: 10, 
  },
  ntitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:30,
    left:150, 
  },
  category: {
    width: 150, 
    height: 80, 
    padding: 10,
    backgroundColor: 'white',
    marginRight: 10, 
    alignItems: 'center', 
    marginBottom:50,
  },
  categoryImage: {
    width: 100, 
    height: 70, 
    borderRadius: 10,
    borderColor:'gray',
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, 
  },
  seccategory: {
    width: 190, 
    height: 250, 
    padding: 10,
    borderRadius: 30,
    borderColor:'black',
    backgroundColor: 'white',
    marginRight: 10, 
    alignItems: 'center', 
  },
  secategoryImage: {
    width: 180, 
    height: 180, 
  },
  seccategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, 
  },
  sbutton: {
    backgroundColor: 'transparent', 
    borderColor: 'green', 
    borderWidth: 2, 
    borderRadius: 10, 
    padding: 10, 
    alignItems: 'center', 
    marginBottom: 20,
  },
  Text: {
    color: 'green', 
    fontSize: 16, 
  },
  textContainer:{
    alignSelf:'flex-start',
    position:'absolute',
    paddingTop: 200,
    marginLeft:10,
  },
  name:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  Icon:{
    position:'absolute',
    marginTop:15,
    right: 15,
    fontSize: 25,
  },
  newcontainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  image: {
    position:'absolute',
    width: 40,
    height: 40,
    borderRadius: 25, 
    marginTop:30,
    left:10, 
  },
  nicon1: {
    position:'absolute',
    marginLeft: 10, 
    color: 'green', 
    marginTop:30,
    right:50, 
  },
  nicon2: {
    position:'absolute',
    marginLeft: 10, 
    marginTop:30,
    right:10, 
  },
});

export default HomeScreen;
