import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.spalshScreen}>
      <StatusBar hidden />
      <Image
        style={{height: 250, width: '100%', resizeMode: 'contain'}}
        source={{
          uri: 'https://asset.brandfetch.io/idB8rIxvvo/idBNValPgc.jpeg',
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  spalshScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
