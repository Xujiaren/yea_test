export default class Timer {

    static setInterval(callback, timeout) {
        return window.setInterval(callback, timeout)
    }

    static clearInterval(intervalId) {
        window.clearInterval(intervalId)
    }
    
}