import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import ContactList from './src/components/ContactList';
import axios from 'axios';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount(){
    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then(response => {
        this.setState({
          contacts: response.data.results
        });
      })
  }

  render(){
    return (
      <View>
        <Header title="Agenda app"/>
        <ContactList contacts={this.state.contacts} />
      </View>
    );
  }
}

export default App;