
import { DeviceEventEmitter} from 'react-native';
import { SensorManager } from 'NativeModules';
import { Loudness } from 'react-native-loudness';
import { sensorDataUpdate } from '../actions';


const sensorData = {
    light: null,
    temp: null,
    noise: null
}
export const sensorReading = (permission) => {
    SensorManager.startProximity(100);
    DeviceEventEmitter.addListener('Proximity', function (data) {
        console.log(data.isNear, data.value);
        const isNear = data.isNear;

        if(!isNear) {
                SensorManager.startLightSensor(100);
                const i=[1];
                DeviceEventEmitter.addListener('LightSensor', function (data) {
                    if(i[0] == 1) {
                        sensorData.light = data.light;
                        console.log(data);
                        i[0] -= 1;
                    }
                });
                SensorManager.stopLightSensor();



                SensorManager.startThermometer(1000);
                const j=[1];
                DeviceEventEmitter.addListener('Thermometer', function (data) {
                    if(j[0] == 1) {
                        sensorData.temp = data.temp;
                        console.log(data);
                        j[0] -= 1;
                    }        
                });
                SensorManager.stopThermometer();


                if(permission) {
                    const loudness = new Loudness();
                    const k = [1] 
                    if(k[0] == 1) {
                        loudness.start();
                        loudness.getLoudness((loudness) => {
                            sensorData.noise = loudness;
                            console.log(loudness);
                            k[0] -= 1;
                        });
                        loudness.stop(); 
                    }  
                }            


                    console.log("FFF1",sensorData)
                    sensorDataUpdate(sensorData);

    }
});
SensorManager.stopProximity();
}