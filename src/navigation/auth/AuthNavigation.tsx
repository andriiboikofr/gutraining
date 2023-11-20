import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login';
import SignUpScreen from '../../screens/signup';

const AuthStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
