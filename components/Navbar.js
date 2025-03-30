import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import EventosScreen from '../screens/EventosScreen';
import AccountScreen from '../screens/AccoutScreen';

const Tab = createMaterialBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#FFFFFF"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#FF8C41' }}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={'map-marked-alt'}
              size={22}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={EventosScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={'calendar'}
              size={22}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={'user-alt'}
              size={22}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
