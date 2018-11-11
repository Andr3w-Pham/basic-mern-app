import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
// Need to import this to bind react and redux together
import { Provider } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // In order to use redux in our components we need to wrap them inside the Provider
       // So now we should be able to basically access stuff from our state from our components. We can share state throughout our components
       <Provider store={store}>
       <div className="App">
         <AppNavbar />
         <Container>
           <ItemModal />
           <ShoppingList />
         </Container>
       </div>
     </Provider>
    );
  }
}

export default App;
