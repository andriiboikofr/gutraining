import {
  Text,
  View,
  Button,
  SectionList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {CUSTOMERS_DATA} from '../data/customers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    textAlign: 'left',
    fontFamily: 'ComicSansMS',
  },
  header: {
    fontSize: 32,
    fontFamily: 'ComicSansMS',
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#E7E7E9',
  },
  title: {
    fontSize: 24,
    fontFamily: 'ComicSansMS',
  },
});

export function CustomersList({navigation}: any) {
  return (
    <SectionList
      sections={CUSTOMERS_DATA}
      style={{
        padding: 10,
        margin: 20,
        borderColor: '#fff',
        borderRadius: 10,
      }}
      keyExtractor={(item, index) => item.id.toString() + index}
      renderItem={({item}) => {
        return (
          <View style={styles.item}>
            <Button
              onPress={() =>
                navigation.navigate('customerDetail', {userId: item.id})
              }
              title={item.name}
              //            style={styles.item}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        );
      }}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
}
