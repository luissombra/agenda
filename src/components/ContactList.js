import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContactListItem from './ContactListItem';

const ContactList = props => {
  const {onContactPress} = props;

  return (
    <FlatList style={style.list}
        data={ props.contacts }
        renderItem={({ item }) => (
          <ContactListItem
              contact={item}
              onContactPress={onContactPress}/>
        )}
        keyExtractor={(item, i) => Object.values(item.name).join('') }
        onEndReached={props.onEndReached}
        onEndReachedThreshold={props.onEndReachedThreshold}
        initialNumToRender={props.initialNumToRender}
    />
  )
}

const style = StyleSheet.create({
  list: {
  },
});

export default ContactList;