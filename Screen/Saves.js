import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';
import  Icon from "react-native-vector-icons/FontAwesome";
const Cate = () => {

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
        {
            name: '246 Sussex St',
            city: 'San Francisco, CA',
            image: require('../assets/image/anh5.png'),
            isLike : false, 
        },
        {
            name: '246 Sussex St',
            city: 'San Francisco, CA',
            image: require('../assets/image/anh6.png'),
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
    <Text style={styles.title}>Saved Items</Text>
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
    marginBottom: 10,
    marginLeft:120,
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
});

export default Cate;
