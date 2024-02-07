import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.7}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showUserLocation={true}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>

        <View style={styles.topMenu}>
          <View style={styles.topMenuContainer}>
            <Ionicons name="menu" size={35} color="#000" />
          </View>

          <View style={styles.searchBar}>
            <Entypo name="circle" size={18} color="green" />
            <TextInput value="" placeholder="Current Location" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  topMenuContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMenu: {
    position: 'absolute',
    top: 20,
    left: 25,
    right: 0,
    flexDirection: 'row',
    gap: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
  },
});
