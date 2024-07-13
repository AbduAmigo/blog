import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './app/screens/HomeScreen';
import NewsScreen from './app/screens/NewsScreen';
import VideoScreen from './app/screens/VideoScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import NewsDetailScreen from './app/screens/NewsDetailScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Video') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            } else if (route.name === 'Local') {
              iconName = focused ? 'local' : 'flag-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6c46ed',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Local" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
