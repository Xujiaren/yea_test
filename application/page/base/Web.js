//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { WebView } from 'react-native-webview';
import theme from '../../config/theme';

// create a component
class Web extends Component {
    
    render() {
        const {route,navigation} = this.props;
        const link = route.params.link||'';

        //console.info(link);
        
        return (
            <View style={styles.container}>
                <WebView
                    androidHardwareAccelerationDisabled={true}
                    source={{uri: link}}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ...theme,
});

export const LayoutComponent = Web;

export function mapStateToProps(state) {
    return {
        
    };
}