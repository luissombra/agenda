import ContactsScreen from './src/screens/ContactsScreen';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    Home: ContactsScreen,
    ContactDetails: {
      screen: ContactDetailsScreen,
      navigationOptions: ({ navigation }) => {
        const {first, last} = navigation.state.params.contact.name;

        //remover linha abaixo após prepara a tela de detalhes
        //const {first, last} = {first:'Maria', last:'Tereza'};

        return ({
          title: `${first} ${last}`
        });
      }
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Agenda App',
      headerStyle: {
        backgroundColor: '#021eba',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flexGrow: 1
      }
    }
  }
)

export default createAppContainer(StackNavigator);