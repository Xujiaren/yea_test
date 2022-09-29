//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux';
import AppNav from './config/route';

const store = configureStore();

// create a component
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNav/>
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default App;
