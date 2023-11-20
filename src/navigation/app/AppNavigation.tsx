import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerIcon from '../../assets/svg/customerMenuIcon.svg';
import HomeIcon from '../../assets/svg/homeMenuIcon.svg';
import {HomeScreen} from '../../screens/home';
import {CustomersList} from '../../screens/customersList';
import {CustomerDetail} from '../../screens/customerDetail';

const Tab = createBottomTabNavigator();

const customersStack = createNativeStackNavigator();

function СustomersStackScreen() {
  return (
    <customersStack.Navigator>
      <customersStack.Screen name="customerList" component={CustomersList} />
      <customersStack.Screen name="customerDetail" component={CustomerDetail} />
    </customersStack.Navigator>
  );
}

export const AppNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: () => {
        if (route.name === 'Home') {
          return <HomeIcon width={30} height={30} />;
        } else {
          return <CustomerIcon width={30} height={30} />;
        }
      },
    })}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Overview'}}
    />
    <Tab.Screen name="Customers" component={СustomersStackScreen} />
  </Tab.Navigator>
);
