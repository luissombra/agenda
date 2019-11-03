import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactList from '../components/ContactList';
import NetworkStatusDisplay from '../components/NetworkStatusDisplay';
import axios from 'axios';

class ContactsScreen extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      contacts: [],
      page: 1,
      amount: 20,
      loading: true,
      error: null
    };
  }

  _fetchContacts = () => {
    const { page, amount } = this.state;
    const URL = `https://randomuser.me/api/?nat=br&results=${amount}&page=${page}`;

    //setTimeout(() => {
      axios
      .get(URL)
      .then(response => {
        this.setState({
          contacts: page === 1
            ? Array.from(response.data.results)
            : [ ...this.state.contacts, ...response.data.results ],
          loading: false
        });
      }).catch((error) => {
        this.setState({ error, loading: false });
      })
    //}, 0);

  };

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loading: true
      }),
      () => {
        this._fetchContacts();
      }
    );
  };

  componentDidMount(){
    this._fetchContacts();
  }

  render(){
    return (
      <View style={style.container}>
        { this.state.contacts.length > 0 ? (<ContactList
              onContactPress={contact => {
                this.props.navigation.navigate('ContactDetails', contact) 
              }}
              contacts={this.state.contacts}
              onEndReached={this._handleLoadMore}
              onEndReachedThreshold={0.5}
              initialNumToRender={this.state.amount}
        />) : null }
        <NetworkStatusDisplay expand={this.state.contacts.length <= 0} loading={this.state.loading} error={this.state.error} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'    
  }

});

export default ContactsScreen;