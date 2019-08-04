import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, PermissionsAndroid} from 'react-native';
import {connect} from 'react-redux';
import {currentPositionChanged, mikePermissionGained} from '../actions';
import {CardSection} from './common';

async function requestGpsPermission() {
  return new Promise((resolve, reject) => {
    try{
      const permission = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'CrowdSourcing App GPS Permission',
          message:
            'CrowdSourcing App needs access to your GPS ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      resolve(permission);
    } catch(err) {
      console.warn(err);
      reject(err)
    }
  })
}

const requestRecordAudioPermission = async (mikePermissionGained) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        'title': 'Record Audio Permission',
        'message': 'This App needs permission to record audio ' +
                   'so the loudness can be properly displayed.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can record audio")
      mikePermissionGained(true);
    } else {
      console.log("Record audio permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}


class CurrentPosition extends Component{

    componentWillMount(){
    
    }
    componentDidMount() {
        requestGpsPermission().then(permission => {
          if(permission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the GPS');
          
              navigator.geolocation.watchPosition(position => {
                // console.log(position)
                this.props.currentPositionChanged(position);  
              },
              error => {
                console.log(error.code)
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 2 })
          } else {
            console.log('GPS permission denied')
          }
        })

        requestRecordAudioPermission(this.props.mikePermissionGained);
    }
  
    render() {
      console.log("curent Place $$$$$$$$$$$$$", this.props.currentPlace)
      return (
        <CardSection>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.thumbnailStyle} 
                source={{uri: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-location-pin-icon-png-image_3566846.jpg'}}
              />
            </View>
            <View style= {styles.container}>
              <Text>Your Current Location is at here : </Text>
              {!!this.props.currentPlace && <Text style={styles.placeText}>{this.props.currentPlace}</Text>}
              {!!this.props.position && <Text>lattitude: {this.props.position.coords.latitude}</Text>}
              {!!this.props.position && <Text>longitude: {this.props.position.coords.longitude}</Text>}
            </View> 
          </View>     
        </CardSection>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    placeText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'magenta'
    }
  });

  const mapStateToProps = ({gps}) => {
    const {position, currentPlace} = gps;

    return {position, currentPlace};
  };

  export default connect(mapStateToProps, {currentPositionChanged, mikePermissionGained}) (CurrentPosition);
  