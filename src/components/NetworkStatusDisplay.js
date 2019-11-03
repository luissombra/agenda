import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default NetworkStatusDisplay = (props) => {
    
    if (props.loading === true) {
        return (
            <View style={[style.container, {flex: props.expand ? 1: null} ]}>
                <ActivityIndicator size="large" color="#021eba" />
            </View>);
    }

    if (props.error){

        return (
            <View style={[style.container, {flex: 1}]}>
                <Text style={style.text}>Ops... algo deu errado =(</Text>
            </View>);
    }

    return false;
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f8fa',
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 24,
        padding: 10,
        margin: 20,
        color: '#b5b5b5',
        borderWidth: 2,
        borderColor: '#e3e3e3',
        borderRadius: 10
    }
});

