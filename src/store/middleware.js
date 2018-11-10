import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { environment } from '../config';
  
const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
 
const customMiddleware = store => next => action => {
  next(action)
}

const clients = {
    default: {
        client: axios.create({
        baseURL:environment.baseUrl,
        //  timeout: 30000,
        responseType: 'json'
        })
    },
    // gmap: {
    //     client: axios.create({
    //         baseURL:environment.gmap,
    //         // timeout: 30000,
    //         responseType: 'json',
    //     })
    // }
}

const axiosMiddlewareOptions = {
  interceptors: {
    request: [(state, config) => {
        return config 
      }],
      response: [(state, response) => {
        return response
      }]
  }
}
  
  
const httpMiddleWare = multiClientMiddleware(clients,axiosMiddlewareOptions)
const middleware = [navMiddleware,httpMiddleWare, customMiddleware];
export default middleware