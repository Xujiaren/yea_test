import { Howl } from 'howler'

export default class Sound {
    
    static setCategory() {}

    constructor(asset, callback) {
        this.sound = new Howl({
            src: [asset],
            onload: (error) => {
                callback(null)
            },
            onloaderror: (error) => {
                callback(error)
            },
        })
    }

    isPlaying = () => {
        return this.sound.playing()
    }

    play = () => {
        if (this.sound.state() !== 'loaded') return this
        this.sound.play()
        return this
    }

    pause = () => {
        this.sound.pause()
    }

    stop = () => {
        this.sound.stop()
        return this
    }

    setSpeed = (speed) => {
        this.sound.rate(speed)
    }

    release = () => {
        this.sound.unload()
        return this
    }

    setCurrentTime = (ts) => {
        this.sound.seek(ts)
    }

    getCurrentTime = (callback) => {
        callback(this.sound.seek())
    }
}