import React, { useState } from "react";
import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity,FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const Houses = () => {
        navigation.navigate('Houses');
    };
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
  
  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10, // Điều chỉnh vị trí tiêu đề tùy ý
  },
  category: {
    width: 150, // Điều chỉnh kích thước nút danh mục tùy ý
    height: 100, // Điều chỉnh kích thước nút danh mục tùy ý
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    marginRight: 10, // Thêm khoảng cách giữa các danh mục
    alignItems: 'center', // Căn giữa nội dung ngang
  },
  categoryImage: {
    width: 50, // Điều chỉnh kích thước hình ảnh tùy ý
    height: 50, // Điều chỉnh kích thước hình ảnh tùy ý
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Thêm khoảng cách giữa hình ảnh và văn bản
  },
  listingList: {
    margin: 10,
  },
  listingImage: {
    width: 80, // Chỉnh kích thước của ảnh trong danh sách
    height: 80,
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

export default HomeScreen;
