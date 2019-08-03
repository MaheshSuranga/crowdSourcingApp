import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import CurrentPosition from './currentPosition';
import RestaurantList from './restaurantList';
import BackgroundTimer from 'react-native-background-timer';
import {checkPlace} from '../calculations/postionCalculation'


class Home extends Component{
  
  componentDidMount() {
    const intervalId = BackgroundTimer.setInterval(() => {
      console.log('tic');
      !!this.props.restaurantDetails && Object.entries(this.props.restaurantDetails).map(restaurant => checkPlace(restaurant,this.props.position.coords))
    }, 5000);

    // BackgroundTimer.clearInterval(intervalId);
  }
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

  const mapStateToProps = ({gps, restaurants}) => {
    const {position} = gps;
    const {restaurantDetails} = restaurants;

    return {position, restaurantDetails};
  };

  export default connect(mapStateToProps) (Home);
  