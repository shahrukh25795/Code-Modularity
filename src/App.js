import React, { Component } from 'react';
import axios from 'axios';
import Routes from './routes/routes';
import { baseUrl } from './contants/contants';
import Cookies from 'js-cookie'


axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = null;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.initInterceptor();
  }

  //code for init interceptor
  initInterceptor() {
    var token = null;
    token = Cookies.get('token') ? Cookies.get('token') : null
    axios.interceptors.request.use((config) => {

      if (config.options) {

        console.error(config.options)
        if (config.options.apiBaseUrl) {
          config.baseURL = "";
        }

        if (config.options.auth) {
          //manage token
        }

        if (config.options.loader) {
          //remove loader
        }

      }
      config.headers.Authorization = token;
      return config;
    },
      (error) => {
        return Promise.reject(error);
      });
    axios.interceptors.response.use((response) => {

      if (response.data.status) {

        if (response.data.status.code === 200) {
          //handle 200 response
        }

        else if (response.data.status.code === 403) {
          //handle 403 response
        }

        else if (response.data.status.code === 401) {
          //handle 401 response
        }

        else {
          //handle response
        }

      }
      return response;
    },
      (error) => {

        if (error === "Error: Network Error") {
          //handle network error
        }
        
        if (error.response) {

          if (error.response.status === 401) {
            //handle 401 error
          }

          else if (error.response.status === 400) {
            //handle 400 error
          }

          else if (error.response.status === 502) {
            //handle 502 error
          }
          
          else {
            //handle error
          }

        }
        return Promise.reject(error);
      });
  }


  render() {
    return <Routes />
  }
}

export default App;