import {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './store';
import {Provider} from 'react-redux';

import {Loader} from './views/Loader';
import {Home} from './views/Home';

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFE'}}>
        <StatusBar />
        {!show ? <Loader /> : <Home />}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
