import {StyleSheet, ActivityIndicator, SafeAreaView, View} from 'react-native';

import {Logo} from '../components/Logo';

const Loader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
        <ActivityIndicator
          style={{marginTop: 48}}
          size="large"
          color="#FF003C"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Loader};
