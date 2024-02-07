import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import GetLocation from 'react-native-get-location';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const {width} = Dimensions.get('window');
  const [widthOfMap, setWidthOfMap] = useState(width);
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setUserLocation({
          longitude: location.longitude,
          latitude: location.latitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: userLocation ? userLocation.latitude : 37.78825,
            longitude: userLocation ? userLocation.longitude : -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          mapType="standard"
          showsUserLocation={true} // Show the current user location
          showsMyLocationButton={true} // Show the "go to current location" button
          zoomControlEnabled={true}
          // onMapReady={{mapMargin: userLocation ? 0 : 1}}>
        >
          <Marker
            coordinate={{
              latitude: userLocation?.latitude,
              longitude: userLocation?.longitude,
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
    justifyContent: 'center',
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  map: {
    flex: 1,
    marginBottom: 0,
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
    // width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
  },
});
