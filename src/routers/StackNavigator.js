import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import MyTabs from './TabNavigator'
import Scanqrcode from '../pages/Home/Scanqrcode'
const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}
        />

        <AuthStack.Screen 
        name="MyTabs" 
       
        component={MyTabs}
    
            options={{headerShown: false}}
        />


    <AuthStack.Screen 
        name="Scanqrcode" 
        component={Scanqrcode}
        options={{headerShown: false}}
        />

    </AuthStack.Navigator>
    );}

export default AuthRoutes;