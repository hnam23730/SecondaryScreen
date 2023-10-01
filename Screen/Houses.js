import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';

const App = () => {
  const [houses, setHouses] = useState([
    {
      id: 1,
      image: require('../assets/image/anh1.png'),
      address: '1500 Polk St',
      city: 'San Francisco, CA',
      price: 5875000,
    },
    {
      id: 2,
      image: require('../assets/image/anh2.png'),
      address: '1010 Steiner St',
      city: 'San Francisco, CA',
      price: 3279000,
    },
    {
      id: 3,
      image: require('../assets/image/anh3.png'),
      address: '76 Saturn St',
      city: 'San Francisco, CA',
      price: 498000,
    },
    {
      id: 4,
      image: require('../assets/image/anh4.png'),
      address: '246 Sussex St',
      city: 'San Francisco, CA',
      price: 899000,
    },
    {
      id: 5,
      address: '278 Brannan St',
      city: 'San Francisco, CA',
      price: 600000,
    },
  ]);

  useEffect(() => {
    // Fetch houses from backend
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Houses</Text>
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
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.bottomBar}>
      <TouchableOpacity // Sử dụng TouchableOpacity thay thế cho Button
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/home.png")}
            style={styles.buttonImage}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/Collection.png")}
            style={styles.buttonImage}
          />
          <Text>Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/Saved.png")}
            style={styles.buttonImage}
          />
          <Text>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/Search.png")}
            style={styles.buttonImage}
          />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row', // Đặt hướng dòng thành "row" để các thành phần con nằm cạnh nhau
    alignItems: 'center', // Căn giữa theo chiều dọc
    padding: 10,
    backgroundColor: '#fafafa',
  },
  imageContainer: {
    flex: 1, // 1 phần cho hình ảnh
  },
  textContainer: {
    flex: 3, // 3 phần cho văn bản
    marginLeft: 10, // Khoảng cách giữa hình ảnh và văn bản
  },
  houseImage: {
    width: 80, // Điều chỉnh kích thước của hình ảnh
    height: 80,
  },
  address: {
    fontSize: 16,
    margin: 10,
  },
  city: {
    fontSize: 14,
    color: '#666666',
    margin: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  bottomBar: {
    height: 50,
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 20,
    height: 20,
  },
});

export default App;
