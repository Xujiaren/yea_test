import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import Picker from 'rmc-picker';
import 'rmc-picker/assets/index.css';

import theme from '../../config/theme';

class PickerView extends Component {

    constructor(props) {
		super(props);
        
		this.state = {
			show: false,
            value: this.props.value || '',
		};
	}

    componentWillReceiveProps(nextProps) {
        const {value} = nextProps
        if (value !== this.props.value) {
            this.setState({
                value: value,
            })
        }
    }

    componentDidMount() {
        
    }

    show() {
        this.setState({
            show: true,
        })
    }

    hide() {
        this.setState({
            show: false
        })
    }

    render() {
        const {show, value} = this.state
        const {items = []} = this.props

        return (
            <Modal visible={show} transparent={true} onRequestClose={() => { this.setState({ show: false }) }}>
                <TouchableOpacity style={[styles.modal]} onPress={() => this.setState({ show: false })} />
                <View style={[styles.picker, styles.bg_white]}>
                    <View style={[styles.row, styles.ai_ct, styles.jc_sb, styles.border_bt]}>
                        <TouchableOpacity onPress={() => this.hide()} style={[styles.p_15]}>
                            <Text>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={[styles.p_15]} onPress={() => {
                            this.props.onValue && this.props.onValue(value)
                            this.hide()
                        }}>
                            <Text>确定</Text>
                        </TouchableOpacity>
                    </View>
                    <Picker
                        selectedValue={value}
                        onScrollChange={(value) => {
                            this.setState({
                                value: value,
                            })
                        }}
                    >
                        {
                            items.map((item, index) => {
                                return <Picker.Item key={'item_' + index} value={item}>{item}</Picker.Item>
                            })
                        }
                    </Picker>
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ...theme,
});

//make this component available to the app
export default PickerView;
