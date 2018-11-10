import { combineReducers } from 'redux';
import RootNavigator from '../routes';
import { createNavigationReducer } from 'react-navigation-redux-helpers';


import articles from './articles';

const navReducer = createNavigationReducer(RootNavigator);
const AppReducer = combineReducers({
  nav:navReducer,
  articles,
});

export default AppReducer