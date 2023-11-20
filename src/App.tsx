import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigation} from './navigation/app/AppNavigation';
import {AuthNavigation} from './navigation/auth/AuthNavigation';
import authStore from './stores/authStore';
import {observer} from 'mobx-react-lite';

// Create the stack navigators
const App = observer(() => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen
  }, []);

  return (
    <NavigationContainer>
      {authStore.isAuthenticated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
});

export default App;
