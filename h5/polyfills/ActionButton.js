//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
class ActionButton extends Component {
    render() {
        const pos = this.props.position || 'right';

        const pstyle = pos == 'left' ? {left: 20} : {right: 20}

        return (
            <TouchableOpacity style={[styles.container, {backgroundColor: this.props.buttonColor || 'transparent'}, pstyle, {width: this.props.size || 20, height: this.props.size || 20, borderRadius: this.props.size ? this.props.size / 2 : 10}, this.props.style]} onPress={() => this.props.onPress && this.props.onPress()}>
                {this.props.renderIcon && this.props.renderIcon()}
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//make this component available to the app
export default ActionButton;
