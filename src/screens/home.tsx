import {Text, View} from 'react-native';
import {styles} from '../assets/styles/stupid';
export function HomeScreen({route}: any) {
  const title = route.pivo;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.innerText}>Home Screen</Text>
      <Text style={styles.innerText}>{title}</Text>
    </View>
  );
}
