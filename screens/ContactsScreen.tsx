import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';




export default function ContactsScreen() {
  return (
    <View>
      <FlatList 
      data={users} 
      renderItem={({ item }) => <ContactListItem user={item} />}
      keyExtractor={( item ) => item.id}
      />
    </View>
  );
}