import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native'
import {CardSection, Card,Header} from './common'

class DetailDescription extends Component {
    componentWillMount() {
        console.log(this.props.details)
    }
    render() {
        console.log("detail component rendered")
        const {imageStyle} = styles;
        return (
            <React.Fragment>
                <Header headerText={this.props.details[0]}/>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <Image
                                style={imageStyle} 
                                source={{uri: this.props.details[1].image}}
                            />
                        </CardSection>
                        <CardSection style={{flexDirection: 'column'}}>
                            <View><Text>No. Of people: approximately {this.props.details[1].count}</Text></View>
                            <View><Text>Noise Level:  DB</Text></View>
                            <View><Text>Temperetaure:  Celcius {this.props.details[1].count}</Text></View>
                            <View><Text>Light Intesnity:  lux {this.props.details[1].count}</Text></View>
                        </CardSection>
                        <CardSection>
                            <View>
                                <Text>*ඉහත දත්ත ගණනය කරනු ලබැනුවේ ජංගම දුරකථන සංවේදක දත්ත මත පදනම් වී බැවින් ඉහත සදහන් තොරතුරු වෙනස් විය හැකි බව කරුණාවෙන් සලකන්න.</Text>
                            </View>
                        </CardSection>
                    </Card>
                </ScrollView>      
            </React.Fragment>            
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

export default DetailDescription;