import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../pages/Home'
import Register from '../pages/Register'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      
    activeColor="#f0edf6"
    barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen name=" " component={Home}
             options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}   
      />

      
      <Tab.Screen  name="Register" component={Register}
     options={{
      tabBarLabel: 'Registros',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-cog" color={color} size={26} />
      ),
    }} 
      
      
      />

    </Tab.Navigator>
  );
}

export default MyTabs;