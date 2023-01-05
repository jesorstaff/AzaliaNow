import {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Logo} from '../components/Logo';
import {Todos} from '../components/Todos';
import {AddNewTask} from './AddNewTask';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 90}}>
      <Logo />
      <Todos />
      <AddNewTask />
    </SafeAreaView>
  );
};

export {Home};
