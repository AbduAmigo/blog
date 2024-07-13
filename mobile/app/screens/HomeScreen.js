import React, {useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import axios from "axios";


const baseURL = "http://127.0.0.1:8000/api";
function mb_strimwidth(str, start, width, trimMarker) {
  if (str.length <= width) {
    return str;
  }

  let trimmedString = str.substring(start, start + width);

  if (trimMarker && start + width < str.length) {
    trimmedString = trimmedString.substring(0, trimmedString.length - trimMarker.length) + trimMarker;
  }

  return trimmedString;
}

function HomeScreen({navigation}) 
{

  const [categoriesData, setCategoriesData] = useState([]);  
  const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    axios.get(`${baseURL}/blogs/text`)
      .then(response => {
        // console.log(response.data.blogs);
        const newsData = response.data.blogs;
        console.log(newsData);
        const categoriesData = response.data.categories;
        setCategoriesData(categoriesData);
        setNewsData(newsData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    return (
      <SafeAreaView style={styles.containerFluid}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.activeCategory}>All</TouchableOpacity>
            {categoriesData.map(category => (
              <TouchableOpacity style={styles.category} key={category.id}>
                {category.name}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.headTitle}>Latest news</Text>
          </View>
          <View style={styles.container}>
            {newsData.map(news => (
              <View style={styles.activeCard}>
                <Text style={{fontSize: 28, color: 'white', marginBottom: 10, fontWeight: 600}}>{mb_strimwidth(news.title, 0, 25, '...')}</Text>
                <Text style={{color: 'white', marginTop: 10}}>{news.author} | {news.date}</Text>
              </View>
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.headTitle}>Around the world</Text>
          </View>
          <View style={styles.container}>
            
            <FlatList
              numColumns={2}
              data={newsData}
              renderItem={({ item }) => (
                  <View>
                    <Image
                      style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: 175,
                        margin: 'auto 5px'
                      }}
                      source={{
                        uri: 'http://127.0.0.1:8000/public/blogs/'+item.image,
                      }}
                    />
                    <Text style={styles.blogTitle}>{mb_strimwidth(item.title, 0, 20, '...')}</Text>
                  </View>
                  
              )} 
              />
            
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  containerFluid: {
    padding: 10,
    backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 10,
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
  newContainer: {
    flex: 1,
    gap: 12,
    padding: 10,
    alignItems: 'center',
    borderRadius: 25
  },
  activeCategory: {
    backgroundColor: '#6c46ed',
    borderRadius: 15,
    padding: 10,
    color: 'white',
    minWidth: 70,
    textAlign: 'center',
    fontSize: 18,
  },
  category: {
    backgroundColor: '#f0f1f3',
    borderRadius: 15,
    padding: 10,
    color: '#515566',
    minWidth: 70,
    textAlign: 'center',
    fontSize: 18,
  },
  headTitle: {
    fontWeight: 600,
    fontSize: 19,
    color: '#515566'
  },
  activeCard: {
    backgroundColor: '#6c46ed',
    padding: 15,
    borderRadius: 10,
    width: 300,
  },
  Card: {
    backgroundColor: '#c7b9f9',
    padding: 15,
    borderRadius: 10,
    width: 300,
  },
  mainContainer: {
    margin: 20,
    overflow: 'hidden',
    height: '100vh'
  },
  blogTitle: {
    margin: 10,
    color: '#6c46ed',
    fontSize: '14px',
    fontWeight: 600,
    
  }
});