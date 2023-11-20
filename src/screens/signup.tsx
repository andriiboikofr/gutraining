// SignUpScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Alert} from 'react-native';
import {userRegistry, User} from '../data/secret_data'; // Adjust the import path based on your project structure

interface SignUpScreenProps {
  navigation: any; // You can replace 'any' with more specific navigation types
}

const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Basic validation, you may want to add more checks
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Please enter valid email and password');
      return;
    }

    const newUser: User = {email, password};
    userRegistry.push(newUser);

    // Optionally, you can navigate to another screen after sign-up
    // navigation.replace('SomeOtherScreen');

    Alert.alert('User registered successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
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
  signUpButton: {
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

export default SignUpScreen;
