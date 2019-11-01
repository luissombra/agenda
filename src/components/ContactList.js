import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import ContactListItem from './ContactListItem';

const ContactList = props => (
  <View>
    {props.contacts.map((person, i) => (
      <ContactListItem key={i} firstName={person.name.first} lastName={person.name.last} />
    ))}
  </View>
)

const styles = StyleSheet.create({
  list: {
  },
});

export default ContactList;