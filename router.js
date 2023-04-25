import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import CreatePostsScreen from './Screens/main/CreatePostsScreen/CreatePostsScreen';
import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import ProfileScreen from './Screens/main/ProfileScreen/ProfileScreen';
import PostsScreen from './Screens/main/PostsScreen/PostsScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import {
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={24}
              color="#DADADA"
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#FF6C00',
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign name="plus" size={24} color="#DADADA" />
              </View>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: 'none' },
          // navigationOptions: () => {
          //   return {
          //     tabBarVisible: false,
          //   };
          // },
        }}
        name="CreatePost"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons name="person" size={24} color="#DADADA" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
