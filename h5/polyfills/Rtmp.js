import React, { Component, createElement } from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import { View, Dimensions, Text, StyleSheet } from 'react-native';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const {width, height} = Dimensions.get('window');

class RtmpView extends Component {

    constructor(props) {
        super(props);
        const {url = ''} = props;

        this.state = {
            url: url,
        }
    }

    componentWillReceiveProps(nextProps) {
        const {url} = nextProps;

        if (url !== this.props.url) {
            this.setState({
                url: url,
            }, () => {
                this.renderVideoJs()
            })
        }
    }

    componentDidMount() {

        const ts = new Date().getTime()
        this.vid = 'videocontainer-' + ts;
        this.pid = 'videoplayer' + ts;

        this.renderVideoJs()
    }

    initialize = () => {

    }

    renderVideoJs = () => {
        this.player && this.player.dispose()
        const vhtml = renderToStaticMarkup(this.renderVideo())
        this.cNode.innerHTML = vhtml

        this.player = videojs('#' + this.pid, {
            autoplay: true,
            width: width,
            height: width * 0.5625,
            preload: 'metadata',
            playsinline:"true",
        }, () => {
            
        });
    }

    renderSource = (uri) => {
        return createElement('source', {
            src: uri,
            type: 'application/x-mpegURL'
        })
    }

    renderVideo = () => {
        const {url} = this.state;

        const vele = createElement("video", {
            id: this.pid,
            ref: node => {
                this.videoNode = node
            },
            width: '100%',
            height: '100%',
            crossOrigin: 'true',
            autoPlay: false,
            className: 'video-js',
		}, this.renderSource(url))

        return vele
    }

    renderVideoContainer = () => {
        return createElement('div', {
            id: this.vid,
            ref: node => {
                this.cNode = node
            }
        })
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.renderVideoContainer()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});

module.exports = { RtmpView };
