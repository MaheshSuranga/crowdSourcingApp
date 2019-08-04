import React, {Component} from 'react';
// import {connect} from 'react-redux'
import {Text, View, ScrollView, Image} from 'react-native'
import {CardSection, Card,Header} from './common'

class DetailDescription extends Component {
    componentWillMount() {
        console.log(this.props.details)
    }
    render() {
        console.log("detail component rendered")
        const {imageStyle, detailStyle} = styles;

        const noiseLevel = () => {
            if(!!this.props.details[1].noise) {
                if(this.props.details[1].noise.toFixed(2) < -100) {
                    return "Absolute Silent"
                }else if (this.props.details[1].noise.toFixed(2) < -50) {
                    return "Silent"
                }else if (this.props.details[1].noise.toFixed(2) < -35) {
                    return "Noisy"
                }else {
                    return "Too Noisy"
                } 
            }      
        }

        const tempLevel = () => {
            if(!!this.props.details[1].temp) {
                if(this.props.details[1].temp > 40) {
                    return "Too Hot"
                }else if (this.props.details[1].temp > 32) {
                    return "Hot"
                }else if (this.props.details[1].temp > 25) {
                    return "Warm"
                }else {
                    return "Cold"
                } 
            }      
        }

        const lightLevel = () => {
            if(!!this.props.details[1].light) {
                if(this.props.details[1].light > 2000) {
                    return "Dazzle"
                }else if (this.props.details[1].light > 1000) {
                    return "Bright"
                }else if (this.props.details[1].light > 25) {
                    return "Moderate Brightness"
                }else {
                    return "Gloomy"
                } 
            }      
        }

        const noiseLevelStyle = () => {
            if(!!this.props.details[1].noise) {
                if(this.props.details[1].noise.toFixed(2) < -100) {
                    return {color: 'thistle'}
                }else if (this.props.details[1].noise.toFixed(2) < -50) {
                    return {color: 'turquoise'}
                }else if (this.props.details[1].noise.toFixed(2) < -35) {
                    return {color: 'salmon'}
                }else {
                    return {color: 'crimson'}
                } 
            }      
        }

        const tempLevelStyle = () => {
            if(!!this.props.details[1].temp) {
                if(this.props.details[1].temp > 40) {
                    return {color: 'crimson'}
                }else if (this.props.details[1].temp > 32) {
                    return {color: 'salmon'}
                }else if (this.props.details[1].temp > 25) {
                    return {color: 'turquoise'}
                }else {
                    return {color: 'thistle'}
                } 
            }      
        }

        const lightLevelStyle = () => {
            if(!!this.props.details[1].light) {
                if(this.props.details[1].light > 2000) {
                    return {color: 'crimson'}
                }else if (this.props.details[1].light > 1000) {
                    return {color: 'salmon'}
                }else if (this.props.details[1].light > 25) {
                    return {color: 'turquoise'}
                }else {
                    return {color: 'thistle'}
                } 
            }      
        }

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
                            <View style={detailStyle}><Text>No. Of people: approximately {this.props.details[1].count}</Text></View>
                            <View style={detailStyle}><Text>Noise Level: {!!this.props.details[1].noise && this.props.details[1].noise.toFixed(2)} dbFS (Values: -160 --> 0)</Text><Text style={noiseLevelStyle()}> {noiseLevel()}</Text></View>
                            <View style={detailStyle}><Text>Temperetaure:  {!!this.props.details[1].temp && this.props.details[1].temp} Celcius</Text><Text style={tempLevelStyle()}> {tempLevel()}</Text></View>
                            <View style={detailStyle}><Text>Light Intesnity:  {!!this.props.details[1].light && this.props.details[1].light} lux</Text><Text style={lightLevelStyle()}> {lightLevel()}</Text></View>
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
    },
    detailStyle: {
        flexDirection: 'row'
    }
};

// const mapStateToProps = ({gps}) => {
//     const {sensorData} = gps;

//     return {sensorData};
// };

export default (DetailDescription);