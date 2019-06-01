import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CurrentPosition from './currentPosition';
import RestaurantList from './restaurantList';

export default class Home extends Component{
  
    render() {
      return (
            <View>
                <React.Fragment>
                    <CurrentPosition />
                    <RestaurantList />
                </React.Fragment>
            </View>     
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
  