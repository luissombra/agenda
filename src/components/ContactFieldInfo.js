import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default ContactFieldInfo = ({label, value}) => (
    <View style={style.wrapper}>
        <Text style={[style.cell, style.label]}>{label}</Text>
        <Text style={[style.cell, style.value]}>{value}</Text>
    </View>
)

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#f7f8fa'
    },
    cell: {
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontSize: 16
    },
    label: {
        flex: 2,
        fontWeight: 'bold',
        backgroundColor: '#ebebeb'
    },
    value: {
        flex: 6,
    }
});
