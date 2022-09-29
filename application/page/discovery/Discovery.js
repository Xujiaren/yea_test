import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, FlatList, StyleSheet, DeviceEventEmitter } from 'react-native';
import { theme } from '../../config';
import connectComponent from '../../util/connect';
import Tabs from '../../component/base/Tabs';
import * as ActivityChannelPage from './activity/ActivityChannel';
import * as SpecialChannelPage from './special/SpecialChannel';
import * as SquadChannelPage from './squad/SquadChannel';
const ActivityChannel = connectComponent(ActivityChannelPage);
const SpecialChannel = connectComponent(SpecialChannelPage);
const SquadChannel = connectComponent(SquadChannelPage);
// create a component
class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        }
    }

    componentDidMount() {
        // this.sub = DeviceEventEmitter.addListener('discover', (data) => {
        //     this.refs.pages && this.refs.pages.goToPage(parseInt(data));
        // })
        const { route, navigation } = this.props
        if (route.params) {
            const { type = 0 } = route.params
            if (type == 2) {
                this.setState({
                    status: 2
                })
            }
            if(type == 1){
                this.setState({
                    status: 1
                })
            }
        }
    }

    componentWillUnmount() {
        // this.sub && this.sub();
    }
    _onSelect = (index) => {
        this.setState({
            status: index
        })
    }

    render() {

        const { status } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={[styles.atabs]}>
                    <Tabs items={['活动', '专题', '线下培训']} atype={0} selected={status} onSelect={this._onSelect} />
                </View>
                {
                    status == 0 ?
                        <ActivityChannel navigation={navigation} />
                        : status == 1 ?
                            <SpecialChannel navigation={navigation} />
                            : status == 2 ?
                                <SquadChannel navigation={navigation} />
                                : null
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ...theme,
    container: {
        flex: 1,
    },
    tab_container: {
        borderBottomWidth: 1,
        borderBottomColor: '#FAFAFA',
    },
    atabs: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#f1f1f1',
        backgroundColor: '#ffffff'
    },
    tab: {
        paddingBottom: 2,
    },
    tab_line: {
        height: 2,
        backgroundColor: '#00A6F6',
    },
});


export const LayoutComponent = Discovery;

export function mapStateToProps(state) {
    return {
        task: state.user.task,
    };
}