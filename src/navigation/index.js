import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';
const AppNavigation = () => {
    const isAuth = useSelector(state => state.auth.userId);
    console.log(isAuth)
    return (
        <NavigationContainer>
            {isAuth ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigation;