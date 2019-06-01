import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, CardSection} from './common';
import DetailDescription from './detailDescription';
import {Actions} from 'react-native-router-flux';

const onPress = (restaurantDetailArray) => {Actions.main({details:restaurantDetailArray})}

class RestaurantDetail extends Component {
    
    render() {
        const {headerContentStyle, headerTextStyle, thumbnailContainerStyle, thumbnailStyle} = styles;

        return (
            <Card>
                <TouchableOpacity onPress={onPress.bind(this, this.props.restaurant)}>
                    <CardSection>
                        <View style={thumbnailContainerStyle}>
                            <Text style={headerTextStyle}>{this.props.restaurant[0]}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Text>No. of People: approximately {this.props.restaurant[1].count}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Text>*වැඩි විස්තර සදහා මෙතන ඔබන්න.</Text>
                        </View>
                    </CardSection>
                </TouchableOpacity>
            </Card>
            )
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justfiContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default RestaurantDetail;