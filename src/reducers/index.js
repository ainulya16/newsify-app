import { combineReducers } from 'redux';
import RootNavigator from '../routes';
import { createNavigationReducer } from 'react-navigation-redux-helpers';


import article from './article';
import book from './book';

const navReducer = createNavigationReducer(RootNavigator);
const AppReducer = combineReducers({
  nav:navReducer,
  article,
  book,
});

export default AppReducer