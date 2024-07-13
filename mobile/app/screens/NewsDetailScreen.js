import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
  Animated,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

function NewsDetailScreen() {
  return (
    <View>
        <ScrollView style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.leftIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </View>
            <View style={styles.centerText}>Blog</View>
            <View style={styles.rightIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </View>
          </View>

          <View style={styles.badgeSuccess}>
              <Text style={{color:'#44ca81',fontSize: 12}}>Travel</Text>
          </View>
          <Text style={styles.headTitle}>Where to get clients for website design</Text>
          <Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#5f7490" class="bi bi-clock" style={{paddingRight: 4}} viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
            2 days ago | 
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="#5f7490" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg>
            Abdalla A
          </Text>

          <Image
              style={{
                resizeMode: 'cover',
                height: 200,
                width: 350,
                marginTop: 20
              }}
              source={require('../../assets/images/bus.jpg')}
            />

          <Text style={styles.newsContent}>
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
            In 2024 people used to travel to Riyadh, Saudi Arabia. For discovering the
            night time, coffees, resturants, small villages, gardens and more.
          </Text>
          
        <Text style={{fontSize: 15}}>
          More articles
        </Text>

        <View style={styles.blogList}>
            
            <View style={styles.blogLeft}>
              <Image 
                style={{
                  resizeMode: 'contain',
                  height: 70,
                  width: 70,
                  marginTop: 20,
                  borderRadius: 20
                }}
                source={require('../../assets/images/desktop.jpg')}
              />
            </View>
          
            <View style={styles.blogRight}>
              
              <View style={{flexDirection: 'column'}}>
                <View style={styles.badgeSuccess}>
                    <Text style={{color:'#44ca81',fontSize: 12}}>Tutorial</Text>
                </View>
                <Text style={{fontSize: 20, color: '#2b305c'}}>Keen on your goals to fast reach</Text>
                <Text style={{color: '#5f7490'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-clock" style={{paddingRight: 4}} viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                2 days ago
                </Text>
              </View>

              
              
            </View>       
           
          </View>

          <View style={styles.blogList}>
            
            <View style={styles.blogLeft}>
              <Image 
                style={{
                  resizeMode: 'contain',
                  height: 70,
                  width: 70,
                  marginTop: 20,
                  borderRadius: 20
                }}
                source={require('../../assets/images/highway.jpg')}
              />
            </View>
          
            <View style={styles.blogRight}>
              
              <View style={{flexDirection: 'column'}}>
                <View style={styles.badgeSuccess}>
                    <Text style={{color:'#44ca81',fontSize: 12}}>Tutorial</Text>
                </View>
                <Text style={{fontSize: 20, color: '#2b305c'}}>Keen on your goals to fast reach</Text>
                <Text style={{color: '#5f7490'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-clock" style={{paddingRight: 4}} viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                2 days ago
                </Text>
              </View>

              
              
            </View>       
           
          </View>
        </ScrollView>

       
    </View>
  );
}
export default NewsDetailScreen;

const styles = StyleSheet.create(
  {
    newsContent: {
      width: 350,
      padding: 5,
      color: '#8c99af',
      textAlign: 'justify',
      marginTop: 10,
      marginBottom: 10
    },
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
    },
    container: {
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
    }
  }
);