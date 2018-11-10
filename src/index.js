import React,{ Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { store, AppNavigator } from './store'

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, getState } = store
    if (getState().nav.index === 0) {
      return false;
    }
    dispatch({type:'Navigation/BACK'});
    return true;
  };
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}