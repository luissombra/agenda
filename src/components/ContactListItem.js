import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const ContactListItem = props => (
    <TouchableNativeFeedback useForeground={true}>
        <View style={styles.item}>
            <Text style={styles.itemText}>{`${props.firstName} ${props.lastName}`}</Text>
        </View>
    </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  itemText: {
    fontSize: 18
  }
});

export default ContactListItem;