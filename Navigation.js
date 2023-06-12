import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './components/screens/accueil/Accueil';
import ProfileScreen from './components/screens/profils/ProfileScreen';
import CameraScreen from './components/screens/camera/CameraScreen';
import Mappp from './components/screens/carte/Map';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Profils" component={ProfileScreen} />
        <Tab.Screen name="Map" component={Mappp} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
