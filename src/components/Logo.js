import {StyleSheet, View, Image, Text} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.logoText}>AzaliaNow</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoText: {
    marginLeft: 18,
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 42,
    color: '#FF003C',
  },
});

export {Logo};
