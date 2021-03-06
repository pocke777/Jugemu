import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Top   from './Components/Views/Top';
import Settings from './Components/Views/Settings';
import Web from './Components/Views/Web';
import Tw from './Components/Views/TwView';
import configureStore from './Stores/configureStore';
import { Provider }    from 'react-redux';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="top" initial component={Top} />
            <Scene key="settings" component={Settings} />
            <Scene key='web' component={Web} />
            <Scene key='tw' component={Tw} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
