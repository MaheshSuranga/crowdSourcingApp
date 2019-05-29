import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';

class RestaurantList extends Component {
    state = {restaurants: null}
    componentWillMount() {
        firebase.database().ref(`/restaurant`)
            .on('value', snapshot => {
                console.log(snapshot.val());
                this.setState({restaurants: snapshot.val()})
            })
    }

    render() {
        return <Text>Hi</Text>
    }

}

export default RestaurantList;