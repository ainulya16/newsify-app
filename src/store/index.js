import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import AppReducer from '../reducers';
import middleware from './middleware';
import RootNavigator from '../routes';

const store = createStore(AppReducer,applyMiddleware(...middleware));


const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { store, AppNavigator }