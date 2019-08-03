import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import reducers from './reducers'
import firebaseConfig from './configeration/database';
import Router from './router';


export default class App extends Component{
    componentWillMount() {
        firebase.app(firebaseConfig);
    }
    componentDidMount() {
    }
  
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


      return (
        <Provider store={store}>
          <Router />    
        </Provider>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
  