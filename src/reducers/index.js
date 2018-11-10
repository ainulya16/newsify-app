import { combineReducers } from 'redux';
import RootNavigator from '../routes';
import { createNavigationReducer } from 'react-navigation-redux-helpers';


import article from './article';

const navReducer = createNavigationReducer(RootNavigator);
const AppReducer = combineReducers({
  nav:navReducer,
  article,
});

export default AppReducer