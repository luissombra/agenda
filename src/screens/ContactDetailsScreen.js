import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ContactFieldInfo from '../components/ContactFieldInfo';
import { stringifyArgument }  from '../util';

class ContactDetailsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {contact: props.navigation.state.params['contact']};

    }
    render(){
        const { contact } = this.state;
        const visibleFields = [ 'gender', 'name', 'email', 'phone', 'cell', 'nat' ];

        return (
            <View style={style.container}>
                <View style={style.avatarWrapper}>
                    <Image style={style.avatar} source={{ uri: contact.picture.large }} />
                </View>
                <View style={style.detailsWrapper}>
                    {
                        Object
                            .keys(contact)
                            .filter(key => visibleFields.includes(key))
                            .map((key, i) => <ContactFieldInfo
                                                    key={i}
                                                    label={key} 
                                                    value={stringifyArgument(contact[key])} 
                                             />
                            )
                    }
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        borderRadius: 100
    },
    avatarWrapper: {
        padding: 20,
        flex: 2,
        /*backgroundColor:'green',*/
        alignItems: 'center'
    },
    detailsWrapper: {
        flex: 4,
        margin: 10,
        elevation: 1
        /*backgroundColor:'orange'*/

    }
});

export default ContactDetailsScreen;

