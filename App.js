import { Image, StatusBar, Switch, Text, View } from 'react-native';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Food from 'pages/food';
import Details from 'pages/details';
import Login from 'pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from 'pages/intro';
import Home from 'pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Profile from 'pages/profile';
import Cart from 'pages/cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: (color, size) => <AntDesign name="home" color="#000" size={18} />}} />
      <Tab.Screen name="Food" component={Food} options={{tabBarIcon: (color, size) => <Ionicons name="fast-food" color="#000" size={18} />}} />
      <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: (color, size) => <Ionicons name="cart" color="#000" size={18} />}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: (color, size) => <AntDesign name="user" color="#000" size={18} />}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Intro" component={Intro} initialParams={{ imgNum: 1, title: "Welcome" }} />
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    // </SafeAreaProvider>

  );
}
