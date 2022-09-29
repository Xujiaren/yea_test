import React, { Component } from 'react';
import api from'./util/net'
import App from './App';

function setup() {

    class Root extends Component {

        constructor(props) {
            super(props);
            const token = localStorage.getItem('token') || '';
            window.token = token;
            this.state={
                loaded:true
            }
        }
        getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if( arr = document.cookie.match(reg)) {
                return arr[2];
            }
                
            return "";
        }
        componentDidMount() {
            let token = ''
            if (window && window.cwsso_token){
                token = window.cwsso_token
            }else{
                token = ''
            }
            if(!token){
                token = this.getCookie('token')
            }
            if(token){
                api.get('/passport/get/profile',{
                    token:token
                }).then(res=>{
                    if (res && res.token) {
                        localStorage.setItem('token', res.token);
                        window.token = res.token
                    }
                    
                    this.setState({
                        loaded:true
                    })
                })
            }else{
                localStorage.setItem('token', '');
                window.token = ''
                this.setState({
                    loaded:true
                })
            }
        }

        render() {
            if(!this.state.loaded) return null
            return (
                <App />
            )
        }
    }

    return Root;
}

module.exports = setup;