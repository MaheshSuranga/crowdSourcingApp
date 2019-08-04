
import { DeviceEventEmitter} from 'react-native';
import { SensorManager } from 'NativeModules';
import { Loudness } from 'react-native-loudness';
import { sensorDataUpdate } from '../actions';

const lightLevel = [null];
const tempLevel = [null];
const noiseLevel = [null];
export const sensorReading = (permission) => {
    return new Promise((resolve, reject) => {
        SensorManager.startProximity(100);
        DeviceEventEmitter.addListener('Proximity', function (data) {
            console.log(data.isNear, data.value);
            const isNear = data.isNear;

            if(!isNear) {
                const promise1 = new Promise((resolve, reject) => {
                    SensorManager.startLightSensor(100);
                    const i=[1];
                    DeviceEventEmitter.addListener('LightSensor', function (data) {
                        if(i[0] == 1) {
                            lightLevel[0] = data.light;
                            console.log(data);
                            i[0] -= 1;
                        }
                        resolve('OK')
                    });
                    SensorManager.stopLightSensor();
                })


                const promise2 = new Promise((resolve, reject) => {
                    SensorManager.startThermometer(1000);
                    const j=[1];
                    DeviceEventEmitter.addListener('Thermometer', function (data) {
                        if(j[0] == 1) {
                            tempLevel[0] = data.temp;
                            console.log(data);
                            j[0] -= 1;
                        }
                        resolve('OK')          
                    });
                    SensorManager.stopThermometer();
                })


                const promise3 = new Promise((resolve, reject) => {
                    if(permission) {
                        const loudness = new Loudness();
                        const k = [1] 
                        if(k[0] == 1) {
                            loudness.start();
                            loudness.getLoudness((loudness) => {
                                noiseLevel[0] = loudness;
                                console.log(loudness);
                                k[0] -= 1;
                                resolve('OK')
                            });
                            loudness.stop(); 
                        }  
                    }
                })
                
                Promise.all([promise1, promise3]).then((pass) => {
                    console.log("promise all successed")
                    if(pass) {
                        const sensorData = {
                            light: lightLevel[0],
                            temp: tempLevel[0],
                            noise: noiseLevel[0]
                        }
                        console.log("FFF1",sensorData)
                        sensorDataUpdate(sensorData);
                        resolve(sensorData)
                    }
                })
        }
    });
    SensorManager.stopProximity();
    })
}