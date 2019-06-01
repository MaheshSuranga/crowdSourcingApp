import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './components/home';
import DetailDescription from './components/detailDescription';

const RouterComponent = () => (
    <Router>
        <Scene key='root'
        hideNavBar>
            <Scene key='first'>
                <Scene 
                initial
                key='home'
                component={Home}
                title="Restaurants/Canteens"
                />
            </Scene>
            <Scene key='main'>
                <Scene
                    hideNavBar
                    key='detailComponent'
                    component={DetailDescription}
                    initial/>
            </Scene>
        </Scene>     
    </Router>
);

export default RouterComponent;