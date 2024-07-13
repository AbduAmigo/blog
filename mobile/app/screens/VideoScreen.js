import React, {useEffect, useState, useRef } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
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

function VideoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [onlyNewsData, setOnlyNewsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    axios.get(`${baseURL}/blogs/video`)
      .then(response => {
        // console.log(response.data.blogs);
        const newsData = response.data.blogs;
        const firstArray = newsData.slice(0, 1);
        const secondArray = newsData.slice(1);
        console.log(firstArray);
        console.log(secondArray);
        setOnlyNewsData(firstArray);
        setNewsData(secondArray);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView style={styles.mainContainer}>

        { onlyNewsData.map((item) => {
          return (
            <View>
              <Image
                  style={{
                    resizeMode: 'cover',
                    height: 200,
                    width: 350,
                    marginTop: 20
                  }}
                  source={{
                    uri: item.thumbnail,
                  }}
                />

              <View style={styles.badgeSuccess}>
                  <Text style={{color:'#44ca81',fontSize: 12}}>{item.name[0]['name']}</Text>
              </View>
              <Text style={styles.headTitle}>{item.title}</Text>
              <Text style={{color: '#5f7490'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-clock" style={{paddingRight: 4}} viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
                {item.date}
              </Text>
            </View>
          )
        })}
      
        <FlatList 
          numColumns={1}
          data={newsData}
          renderItem={({ item }) => (
          
          <TouchableOpacity style={styles.blogList}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.blogLeft}>
                <Image 
                  style={{
                    resizeMode: 'contain',
                    height: 70,
                    width: 70,
                    marginTop: 20,
                    borderRadius: 20
                  }}
                  source={{
                    uri: item.thumbnail,
                  }}
                />
              </View>
            
              <View style={styles.blogRight}>
                
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.badgeDanger}>
                      <Text style={{color:'#84558a',fontSize: 12}}>{item.name[0]['name']}</Text>
                  </View>
                  <Text style={{fontSize: 20, color: '#2b305c'}}>{mb_strimwidth(item.title, 0, 20, '...')}</Text>
                  <Text style={{color: '#5f7490'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-clock" style={{paddingRight: 4}} viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                      </svg>
                  {item.date}
                  </Text>
                </View>

                
                
              </View>
              
            </Pressable>
                  
          </TouchableOpacity>
          
          )} 
          />
        

      </ScrollView>
  </View>
  );
}
export default VideoScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollContainer: {
    height: 350,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: '#393967',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center'
  },
  infoSMText: {
    color: '#8c99af',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center'
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discoverBtn: {
    top: '90px',
    bottom: -10,
    width: 100,
    margin: 'auto',
    left: 120,
    textAlign: 'center', 
    padding: 10, 
    borderRadius: 10, 
    backgroundColor: '#8883f4'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  // blog
  footer: {
    flexDirection: 'row',
    flex: 2,
    padding: 20,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  footerIcon: {
    width: 90,
    alignItems: 'center'
  },
  mainContainer: {
    margin: 20,
    overflow: 'hidden',
    height: '90vh'
    
  },
  containerFluid: {
    flexDirection: 'row',
    flex: 2,
    padding: 5,
    gap: 10,    
  },
  leftIcon: {
    width: 100,
    alignItems: 'flex-start'
  },
  centerText: {
    textAlign: 'center',
    width: 120
  },
  rightIcon: {
    width: 100,
    alignItems: 'flex-end'
  },
  badgeSuccess: {
    backgroundColor: '#e7f7f4',
    borderRadius: 10,
    color: '#44ca81',
    padding: 5,
    width: 100,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center', 
  },
  badgeDanger: {
    backgroundColor: '#f5e7f7',
    borderRadius: 10,
    color: '#84558a',
    padding: 5,
    width: 100,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center', 
  },
  badgeWarning: {
    backgroundColor: 'lightyellow',
    borderRadius: 10,
    color: 'yellow',
    padding: 5,
    width: 100,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center', 
  },
  badgeInfo: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    color: '#44ca81',
    padding: 5,
    width: 100,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center', 
  },
  headTitle: {
    fontWeight: '800',
    fontSize: 25,
    width: 300,
    color: '#2b305c'
  },
  line: {
    border: 10,
    borderBottomColor: 'red',
    height: 10
  },
  blogLeft: {
    width: 80
  },
  blogRight: {
    width: 250
  },
  blogList: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
    width: 300,
    border: 10,
    borderBottomColor: 'red'
  },
  // detail
  newsContent: {
    width: 350,
    padding: 5,
    color: '#8c99af',
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 10
  }
});