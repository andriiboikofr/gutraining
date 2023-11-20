import {Text, View} from 'react-native';
import {CUSTOMERS_DATA} from '../data/customers';
import {styles} from '../assets/styles/stupid';

export function CustomerDetail({route}: any) {
  const id = route?.params?.userId;
  console.log(route.params);
  function getUserDataById(id: number) {
    for (const section of CUSTOMERS_DATA) {
      const user = section.data.find(user => user.id === id);
      if (user) {
        return user;
      }
    }
    return null; // or undefined, or throw an error, depending on your error handling preference
  }

  // Example usage:
  const userData: any = getUserDataById(id);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 30,
      }}>
      <Text>Customer detail Screen</Text>
      <Text style={styles.innerText}>
        ID: <Text style={{color: 'purple'}}>{route?.params?.userId}</Text>
      </Text>
      <Text style={styles.innerText}>
        Name: <Text style={{color: 'purple'}}>{userData.name}</Text>
      </Text>
      <Text style={styles.innerText}>
        Birth Place:{' '}
        <Text style={{color: 'purple'}}>{userData.birthPlace}</Text>
      </Text>
      <Text style={styles.innerText}>
        Favorite Ice Cream:{' '}
        <Text style={{color: 'purple'}}>{userData.favoriteIceCream}</Text>
      </Text>
    </View>
  );
}
