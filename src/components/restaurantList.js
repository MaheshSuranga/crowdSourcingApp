import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {restaurantsFetch} from '../actions';
import RestaurantDetail from './restaurantDetail';

class RestaurantList extends Component {
    state = {restaurants: null}
    componentWillMount() {
        console.log("before db call")
        this.props.restaurantsFetch()

    }

    renderRestaurantList() {
        return (!!this.props.restaurantDetails && Object.entries(this.props.restaurantDetails).map(restaurant => <RestaurantDetail key={restaurant[0]} restaurant={restaurant}/>))
    }

    render() {
        console.log("hi4",Object.entries(this.props.restaurantDetails))
        return (
            <ScrollView>
                {this.renderRestaurantList()}
            </ScrollView>
        )
    }

}

const mapStateToProps = ({restaurants}) => {
    
    const {restaurantDetails} = restaurants;
    console.log("hi",restaurantDetails)
    return {restaurantDetails};
}

export default connect(mapStateToProps, {restaurantsFetch}) (RestaurantList);