import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../../nested/DefaultScreen/DefaultScreen';
import CommentsScreen from '../../nested/CommentsScreen/CommentsScreen';
import MapScreen from '../../nested/MapScreen/MapScreen';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Feed"
        component={DefaultScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 21 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          headerTitleAlign: 'center',
          tabBarVisible: false,
        }}
        // options={({ route }) => ({
        //   tabBarStyle: ((route) => {
        //     const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        //     console.log(routeName);
        //     if (routeName === 'Comments') {
        //       return { display: 'none' };
        //     }
        //     return;
        //   })(route),
        // })}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
