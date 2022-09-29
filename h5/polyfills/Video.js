import React, { Component, createElement } from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import { View, Dimensions, Text, StyleSheet } from 'react-native';

import _ from 'lodash';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const {width, height} = Dimensions.get('window');

// create a component
class Video extends Component {

    constructor(props) {
        super(props);
        const {source = {uri : ''}} = props

        this.state = {
            source: source,
        }
    }

    componentWillReceiveProps(nextProps) {
        const {source, rate, paused, fullscreen} = nextProps;

        if (!_.isEqual(source, this.props.source)) {
            this.setState({
                source: source,
            }, () => {

                this.renderVideoJs()
            })
        }
        
        if (paused !== this.props.paused) {
            if (paused) {
                this.player && this.player.pause()
            } else {
                this.player && this.player.play()
            }
        }

        if (rate !== this.props.rate) {
            this.player && this.player.playbackRate(rate);
        }
    }

    componentDidMount() {
        const ts = new Date().getTime()
        this.vid = 'videocontainer-' + ts;
        this.pid = 'videoplayer' + ts;
        this.renderVideoJs()

        //https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8

        // //http://scienceandfilm.org/uploads/videos/files/Nzara_trailer.mp4
    }

    componentWillUnmount() {
        this.player && this.player.dispose()
    }

    seek = (ts) => {
        this.player && this.player.currentTime(ts)
    }

    presentFullscreenPlayer = () => {
        // const el = document.getElementById(this.vid)
        // if (el.webkitRequestFullscreen) {
        //     this.props.onFullscreenPlayerWillPresent && this.props.onFullscreenPlayerWillPresent()
        //     el.requestFullscreen()
            
        // } else if (el.requestFullscreen) {
        //     this.props.onFullscreenPlayerWillPresent && this.props.onFullscreenPlayerWillPresent()
        //     el.requestFullscreen()
        // }
    }

    dismissFullscreenPlayer = () => {
        // this.props.onFullscreenPlayerWillDismiss && this.props.onFullscreenPlayerWillDismiss()
        // document.exitFullscreen();
    }

    renderVideoJs = () => {
        this.player && this.player.dispose()
        const vhtml = renderToStaticMarkup(this.renderVideo())
        this.cNode.innerHTML = vhtml

        const that = this;
        this.player = videojs('#' + this.pid, {
            autoplay: true,
            width: width,
            height: width * 0.5625,
            preload: 'metadata',
            playsinline:"true",
            controls: true,
            playbackRates: [1, 1.5, 2],
        }, () => {            
            this.player.on('loadedmetadata', function() {
                that.props.onLoad && that.props.onLoad({duration: this.duration()})
            })

            this.player.on('loadstart', function() {
                that.props.onReadyForDisplay && that.props.onReadyForDisplay({})
            })

            this.player.on('timeupdate', function() {
                that.props.onProgress && that.props.onProgress({currentTime: this.currentTime()})
            })

            this.player.on('ended', function() {
                that.props.onEnd && that.props.onEnd({})
            })

            // this.player.on('enterFullWindow', function() {
            //     that.props.onFullscreenPlayerWillPresent && that.props.onFullscreenPlayerWillPresent()
            // })

            // this.player.on('exitFullWindow', function() {
            //     that.props.onFullscreenPlayerWillDismiss && that.props.onFullscreenPlayerWillDismiss()
            // })
        });
    }

    renderSource = (uri, isHls) => {
        return createElement('source', {
            src: uri,
            type: isHls ? 'application/x-mpegURL' : 'video/mp4'
        })
    }

    renderVideo = () => {
        const {source} = this.state;
        const {poster = ''} = this.props;

        const isHls = source.uri.indexOf('m3u8') >= 0;

        const vele = createElement("video", {
            id: this.pid,
            ref: node => {
                this.videoNode = node
            },
            poster: poster,
            width: '100%',
            height: '100%',
            crossOrigin: 'true',
            autoPlay: false,
            className: 'video-js',
		}, this.renderSource(source.uri, isHls))

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
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Video;
