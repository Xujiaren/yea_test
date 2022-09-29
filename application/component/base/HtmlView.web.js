//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HtmlView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <div id="article" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
            </View>
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
export default HtmlView;
