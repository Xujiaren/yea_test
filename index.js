import {AppRegistry, Platform} from 'react-native';
import setup from './application';

AppRegistry.registerComponent('eschool', setup);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('eschool', { rootTag: document.getElementById('root') });
}