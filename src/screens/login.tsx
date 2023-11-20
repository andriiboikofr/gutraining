// LoginScreen.tsx
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import authStore from '../stores/authStore';
import {userRegistry} from '../data/secret_data';
//import messaging from '@react-native-firebase/messaging';

interface LoginScreenProps {
  navigation: any; // You can replace 'any' with more specific navigation types
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestUserPermission = async () => {
    //const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    // if (enabled) {
    //   console.log('Authorization status:', authStatus);
    // }
  };

  // Call this function at an appropriate point in your app

  useEffect(() => {
    // This effect will run when isAuthenticated changes
    if (authStore.isAuthenticated) {
      requestUserPermission();
      navigation.replace('Home');
    }
  }, [authStore.isAuthenticated, navigation]);

  const handleLogin = () => {
    const correctLogin = userRegistry.some(
      user => user.email === email && user.password === password,
    );
    if (correctLogin) {
      authStore.setAuthenticated(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{color: 'purple'}}
        onPress={() => navigation.navigate('SignUp')}>
        SignUP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
