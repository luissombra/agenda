import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const ContactListItem = props => {
  const {contact, onContactPress} = props;
  const {first, last} = contact.name;
  const {thumbnail} = contact.picture;

  return (
    <TouchableOpacity useForeground={true} onPress={ () => { props.onContactPress({ contact }) } }>
        <View style={styles.item}>
            <Image style={styles.avatar} source={{ uri: thumbnail }} />
            <Text style={styles.itemText}>{`${first} ${last}`}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemText: {
    flex: 7,
    fontSize: 18,
    marginLeft: 15
  },
  avatar: {
    flex: 1,
    marginLeft: 15,
    aspectRatio: 1,
    borderRadius: 50
  }
});

export default ContactListItem;